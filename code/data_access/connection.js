import mongodb from 'mongodb';

export async function Start({ip: ip, port: port, db: db}){
  try{
    let con = yield mongodb.connect(`mongodb://${ip}:${port}/${db}`);
    return {con: con, error: null};
  }catch(e){
    return {con: null, error: 'cant open connection with mongo!'};
  }
}
