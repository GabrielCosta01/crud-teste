import { app } from "./app";
import connectToDataBase from "./data-source";

(async () => {
    await connectToDataBase().catch((err) => console.error("Error during Data Source initialization", err))

    
    app.listen(4545, () => {
        console.log("Servidor Rodando");
        
    })
})