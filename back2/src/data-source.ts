import mongoose, {ConnectOptions, connect, MongooseOptions } from 'mongoose';

type ConnectionOptionsExtend = {
    useNewUrlParser: boolean,
    useUnifiedTopology: boolean,
}

const connectToDataBase = async () => {
    try {
        const dbUrl = "mongodb://127.0.0.1:27017/crudquasar";

        const options: ConnectOptions & ConnectionOptionsExtend = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }

        await mongoose.connect(dbUrl, options);

        console.log("Conectado ao MongoDB");
        
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB --> ", error);
    }
}
export default connectToDataBase;