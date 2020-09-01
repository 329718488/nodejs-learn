module.exports={
    wh:"",
    where:(wh)=>{
    this.wh=wh;
    return this
    },
    select:()=>{
        const sql=`select * from xxx where ${this.wh}`
    }
}