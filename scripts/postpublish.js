import { execSync } from "child_process";
const registry = 'https://npm.pkg.github.com'
if (!process.env.ALREADY_PUBLISHED) {
    console.log("Publishing to npmjs.org before GitHub Packages...");
    execSync(`npm publish --registry=${registry}`, {
        stdio: "inherit",
        env: { ...process.env, ALREADY_PUBLISHED: "1" }
    });
}