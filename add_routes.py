import os

# Models to create routes
models = ["Alarm","Room","Arming","Dht","GSense","Light","Notification","Rgb","Room","Routine","Ultrason"]


# Folder Path
path = "./src/routes";
  
# Change the directory
os.chdir(path)

 # File to read
file_path = "route.ts"

for model in models:
    if not os.path.exists("{}.ts".format(model.lower())):
        # create the route
        f = open("{}.ts".format(model.lower()),"w")

        f.write("import express,{Request,Response} from 'express';\n")

        begin = "import {"
        end = "} from"
        imp = " ".join([begin,model,end])

        f.write("{} '../models/{}';\n".format(imp,model.lower()))

        f.write("import { getAll, getOne,createOne,updateOne,deleteOne } from './route';\n\n")

        f.write("const { checkJwt } = require('../middlwares/auth');\n")

        f.write("const router = express.Router();\n\n")

        # /GET
        f.write("// get all {}\n".format(model))
        begin = "{getAll("
        end = ",req,res);});"
        imp = " ".join([begin,model,end])
        f.write("router.get('/api/{}',[checkJwt],(req:Request,res:Response)=>{}\n\n".format(model.lower(),imp))

        # /GET/ID
        f.write("// get a {}\n".format(model))
        begin = "{getOne("
        end = ",req,res);});"
        imp = " ".join([begin,model,end])
        f.write("router.get('/api/{}/:id',[checkJwt],(req:Request,res:Response)=>{}\n\n".format(model.lower(),imp))

        # /POST
        f.write("// create {}\n".format(model))
        begin = "{createOne("
        end = ",req,res);});"
        imp = " ".join([begin,model,end])
        f.write("router.post('/api/{}',[checkJwt],(req:Request,res:Response)=>{}\n\n".format(model.lower(),imp))

        # /PATCH 
        f.write("// update {}\n".format(model))
        begin = "{updateOne("
        end = ",req,res);});"
        imp = " ".join([begin,model,end])
        f.write("router.patch('/api/{}/:id',[checkJwt],(req:Request,res:Response)=>{}\n\n".format(model.lower(),imp))
            

        # /DELETE 
        f.write("// delete {}\n".format(model))
        begin = "{deleteOne("
        end = ",req,res);});"
        imp = " ".join([begin,model,end])
        f.write("router.delete('/api/{}/:id',[checkJwt],(req:Request,res:Response)=>{}\n\n".format(model.lower(),imp))

        # Export
        begin = "{ router as"
        middle = "{}Router".format(model.lower())
        end = "}"
        imp = " ".join([begin,middle,end])
        f.write("export  {} ".format(imp))