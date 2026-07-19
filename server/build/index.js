// console.log("My Name Is Umang Parmar")
//   // manually add scripts for ts to js code direct write and run in build folder  : Package.json
import { initServer } from "./app/index.js";
async function init() {
    const app = await initServer();
    app.listen(8000, () => console.log(`Server Started at Port : 8000 `));
}
init();
//# sourceMappingURL=index.js.map