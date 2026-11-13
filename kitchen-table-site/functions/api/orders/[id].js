const ok=(r,e)=>e.ADMIN_PASSWORD&&r.headers.get('x-admin')===e.ADMIN_PASSWORD;
const j=(d,s=200)=>new Response(JSON.stringify(d),{status:s,headers:{'content-type':'application/json'}});
const ensure=db=>db.prepare("CREATE TABLE IF NOT EXISTS orders(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,items TEXT,total INTEGER,status TEXT DEFAULT 'new',created INTEGER)").run();
const S=['new','preparing','ready','delivered','cancelled'];
export async function onRequestPatch({request,env,params}){
  if(!ok(request,env))return j({error:'unauthorized'},401);
  const {status}=await request.json();if(!S.includes(status))return j({error:'bad'},400);
  await env.DB.prepare('UPDATE orders SET status=? WHERE id=?').bind(status,params.id).run();return j({ok:true});
}
export async function onRequestDelete({request,env,params}){
  if(!ok(request,env))return j({error:'unauthorized'},401);
  await env.DB.prepare('DELETE FROM orders WHERE id=?').bind(params.id).run();return j({ok:true});
}
