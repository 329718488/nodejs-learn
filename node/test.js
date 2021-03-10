//数组nums中连续相加等于num的子数组的个数
// const nums =[1,1,1];
// const num=2;
// const subarraySum=(nums,k)=>{
//     const mp = new Map();
//     mp.set(0, 1);
//     let count = 0, pre = 0;
//     for (const x of nums) {
//         pre += x;
//         if (mp.has(pre - k)) {
//             count += mp.get(pre - k);
//         }
//         if (mp.has(pre)) {
//             mp.set(pre, mp.get(pre) + 1);
//         } else {
//             mp.set(pre, 1);
//         }
//     }
//     return count;

// }
// console.log(subarraySum(nums,num));

//快排
// const arrSort=(arr)=>{
//     if(arr.length<=1){
//         return arr
//     }
//     const middle=arr.shift()
//     const left=[];
//     const right=[];
//     while (arr.length>0){
//         if(arr[0]<=middle){
//             left.push(arr.shift())
//         }else{
//             right.push(arr.shift())
//         }

//     }
//     return [].concat(arrSort(left),middle,arrSort(right))

// }
// console.log(arrSort([5,3,9,20,11,7,22]));

//归并排序
// const merge=(left,right)=>{
// const res=[];
// while (left.length&&right.length){
//     if(left[0]<=right[0]){
//         res.push(left.shift())
//     }else{
//         res.push(right.shift())
//     }
// }

// res.push(...left)
// res.push(...right)

// return res
// }

// const mergeSort=(arr)=>{
//     if(arr.length<=1){
//         return arr
//     }
//     const middle_index=(Math.floor(arr.length/2,10))
//     const left=arr.slice(0,middle_index);
//     const right=arr.slice(middle_index);
//    return  merge(mergeSort(left),mergeSort(right))
// }

// console.log(mergeSort([5,3,9,20,11,7,22]));

// class MyPromise{
//     constructor(ext){
//         this.status="pending";
//         this.result="";
//         this.reason="";
//         this.f_cbs=[];
//         this.r_cbs=[];
//         const resolve=(result)=>{
//             if(this.status==="pending"){
//                 this.status="fulfilled"
//                 this.result=result;
//                 this.f_cbs.forEach(cb=>cb(result))
//             }
//         }
//         const reject=(reason)=>{
//             if(this.status==="pending"){
//                 this.status="rejected"
//                 this.reason=reason;
//                 this.r_cbs.forEach(cb=>cb(reason))
//             }
//         }
//         try{
//             ext(resolve,reject) 
//         }catch(err){
//             reject(err)
//         }
//     }
//     resolvePromise=(p,x,resolve,reject)=>{
//         if(p===x) reject ("xxxxx") 
//         if(x&&typeof x==="function"||typeof x==="object"){
//             let called=false;
//             try{
//                 if(typeof x.then==="function"){
//                     x.then(res=>{
//                         if(called) return 
//                         called=true;
//                         resolve(res)
//                     },err=>{
//                         if(called) return 
//                         called=true;
//                         reject(err)
//                     })
//                 }else{
//                     if(called) return 
//                     called=true;
//                     resolve(res)
//                 }
//             }catch(err){
//                 if(called) return 
//                         called=true;
//                 reject(err)
//             }
//         }else{
//             resolve(x)
//         }
//     }

//     then=(f_cb,r_cb)=>{
//         const p=new MyPromise((resolve,reject)=>{
//             if(this.status==="fulfilled"){
//                 setTimeout(()=>{
//                 try{
//                     const x=f_cb(this.result)
//                     this.resolvePromise(p,x,resolve,reject)
//                 }catch(err){
//                     reject(err)
//                 }
//             },0)
//             }else if(this.status==="reject"){
//                 setTimeout(()=>{
//                 try{
//                     const x=r_cb(this.reason)
//                     this.resolvePromise(p,x,resolve,reject)
//                 }catch(err){
//                     reject(err)
//                 }
//             },0)
//             }else if(this.status==="pending"){
                
//                 this.f_cbs.push((result)=>{
//                 setTimeout(()=>{
//                     const x=f_cb(result)
//                     this.resolvePromise(p,x,resolve,reject)
//                 },0)
//                 })
//                 this.r_cbs.push((reason)=>{
//                     setTimeout(()=>{
//                         const x=r_cb(reason)
//                         this.resolvePromise(p,x,resolve,reject)
//                     },0)
//                     })
            
//         }
//         })
//         return p
//     }
//     finally=(cb)=>{
//        return this.then(value=>{
//            return new MyPromise(cb()).then(()=>value)
//        },reason=>{
//            return new MyPromise(cb()).then(()=>{throw reason})
//        })
//     }
//     static all=(ps)=>{
//         return new MyPromise((rs,rj){

            

//         })
//     }
// }

// const p1=new MyPromise((resolve,reject)=>{
//     console.log(1);
//     setTimeout(()=>{
//         console.log("timeout1");
//         resolve(10)
//     },1000)
// })
// const p2=new MyPromise((resolve,reject)=>{
//     console.log(2);
//     setTimeout(()=>{
//         console.log("timeout2");
//         resolve(20)
//     },1000)
// })
// p1.then(res=>{
//     console.log(res+1);
//     return p2
// },err=>{}).then(res=>{
//     console.log(res+1);
// },err=>{})
// console.log("end");

//笛卡尔积 [[1,2],[3,4]]
// const fn=(arr)=>{
//     if(arr.length<2){
//         return arr[0]||[]
//     }
//     const res=[]
//     for(let i=0;i<arr[0].length;i++){
//         for(let j=0;j<arr[1].length;j++){
//             res.push(`${arr[0][i]}-${arr[1][j]}`)
//         }
//     }
//     if(arr.length>2){
//         arr.splice(0,2,res);
//         return fn(arr)
//     }else{
//         return res
//     }
    
    
// }
// console.log(fn([[1,2,5],[3,4,6],["a","b","c"]]));
s=10
const a={
    a:1,
    b:()=>{
        console.log(this.a,this);
    },
    c:function(){
        console.log(s);
        let s=101;
    }
}

a.c()