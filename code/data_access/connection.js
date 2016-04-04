import mongodb from 'mongodb';

export async function Start({ip: ip, port: port, db: db}){
  try{
    let con = await mongodb.connect(`mongodb://${ip}:${port}/${db}`);
    return {con: con, error: null};
  }catch(e){
    return {con: null, error: 'cant open connection with mongo!'};
  }
}
