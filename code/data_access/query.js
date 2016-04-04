export function SelectId({conn: conn, coll: coll, id: id}){
  return async function(id){
    try{
      const doc = await conn.collection(coll).find({id: id}).toArray();
      if(!!doc) return {doc: doc, error: null};
      return {doc: null, error: 'cant find this object'};
    }catch(e){
      return {doc: null, error: 'error to get this doc'};
    }
  };
}
