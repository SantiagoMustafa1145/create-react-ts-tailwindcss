#!/usr/bin/env node
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const degit = require("degit");
const inquirer = require("inquirer");

// Obtener argumentos
const [_, __, projectName] = process.argv;

if (!projectName) {
  console.error("Por favor especifica un nombre de proyecto:");
  console.log("  npx create-react-ts-tailwind my-app");
  process.exit(1);
}

// Obtener el directorio actual de trabajo
const currentDir = process.cwd();
const targetPath = path.join(currentDir, projectName);

console.log(`🚀 Creando proyecto en: ${targetPath}`);

// Verificar si el directorio ya existe
if (fs.existsSync(targetPath)) {
  console.error(
    `❌ Error: Ya existe un directorio llamado "${projectName}" en esta ubicación`
  );
  process.exit(1);
}

// Descargar template con degit
const templateRepo = "SantiagoMustafa1145/react-ts-tailwindcsss";
const emitter = degit(templateRepo, {
  cache: false,
  force: true,
  verbose: true,
});

// Función para detectar gestores instalados
async function detectPackageManagers() {
  const managers = ["npm", "yarn", "pnpm", "bun"];
  const available = [];

  for (const manager of managers) {
    try {
      const check = spawnSync(manager, ["--version"], { stdio: "ignore" });
      if (check.status === 0) {
        available.push(manager);
      }
    } catch (e) {
      // Ignorar si no está instalado
    }
  }

  return available.length > 0 ? available : ["npm"]; // Fallback a npm
}

// Función para instalar dependencias
function installDependencies(manager, path, stateManager) {
  console.log(`📦 Instalando dependencias con ${manager}...`);

  let command = manager;
  let args = [];

  switch (manager) {
    case "npm":
      args = ["install"];
      break;
    case "yarn":
      args = [];
      break;
    case "pnpm":
      args = ["install"];
      break;
    case "bun":
      args = ["install"];
      break;
  }

  args.push(stateManager);

  const result = spawnSync(command, args, {
    cwd: path,
    stdio: "inherit",
  });

  return result.status === 0;
}

// Función principal async
async function main() {
  try {
    // Descargar template
    await emitter.clone(targetPath);
    console.log("✅ Template descargado correctamente");

    // Eliminar .git existente
    try {
      fs.rmSync(path.join(targetPath, ".git"), {
        recursive: true,
        force: true,
      });
    } catch (err) {
      console.warn("⚠️ No se pudo eliminar el historial de Git existente");
    }

    // Inicializar nuevo repositorio
    spawnSync("git", ["init"], { cwd: targetPath, stdio: "inherit" });

    // Detectar gestores disponibles
    const availableManagers = await detectPackageManagers();

    // Preguntar por el gestor de paquetes
    const prompt = inquirer.createPromptModule();
    const { packageManager } = await prompt({
      type: "list",
      name: "packageManager",
      message: "Selecciona el gestor de paquetes:",
      choices: availableManagers,
      default: availableManagers.includes("npm") ? "npm" : availableManagers[0],
    });

    // Preguntar por el gestor de estado
    let { stateManager } = await prompt({
      type: "list",
      default: true,
      name: "stateManager",
      message: "¿Prefieres Zustand o Redux?",
      choices: ["zustand", "redux", "otra"],
      default: "zustand",
    });

    // Dar opción a la personalización del gestor de estado
    if (stateManager === "otra") {
      const { otherStateManager } = await prompt({
        type: "input",
        default: true,
        name: "otherStateManager",
        message: "¿Con qué librería quieres manejar tu estado?",
        default: "",
      });

      stateManager = otherStateManager;
    }

    // Instalar dependencias
    const { accessToInstall } = await prompt({
      type: "confirm",
      default: true,
      name: "accessToInstall",
      message: "¿Quiere instalar las dependencias?",
    });

    if (accessToInstall) {
      const installSuccess = installDependencies(
        packageManager,
        targetPath,
        stateManager
      );

      if (installSuccess) {
        console.log("\n🎉 ¡Proyecto creado con éxito!");
        console.log(`cd ${projectName}`);
      } else {
        console.error("❌ Error instalando dependencias");
        console.log("Puedes intentar instalarlas manualmente:");
        console.log(`cd ${projectName} && ${packageManager} install`);
      }
    } else {
      // Avisamos que el proyecto se creó y dictamos los comandos para comenzar
      console.log("\n🎉 ¡Proyecto creado con éxito!");
      console.log("Para comenzar:");
      console.log(`cd ${projectName} && ${packageManager} install`);
    }
  } catch (err) {
    // Cancelamos la descarga del proyecto
    console.error("❌ Error al crear el proyecto:", err.message);
    process.exit(1);
  }
}

// Ejecutar la función principal
main();
