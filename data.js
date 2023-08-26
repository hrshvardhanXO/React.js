// function calculator(a,b,operation)
// {
//     return operation(a,b);
// }
// function sub(a,b)
// {
//     return a-b;
// }
// let res = calculator(5,4,sub);
// console.log(res);



// const regex = (callback) =>{
//     setTimeout(()=>{
//         console.log("Addmission confirm");
//         callback();
//     },5000);
// };

// const journey = (callback) =>{
//     setTimeout(()=>{
//         console.log("");
//         callback();
//     },2000);
// }

// const Linux = (callback) =>{
//     setTimeout(()=>{
//         console.log("Linux");
//         callback();
//     },2000);
// }

// console.log("order is now going to take place");
// placeorder(()=>{
//     console.log('pass to production');
//     startProduction(()=>{
//         console.log('passing to product id');
//         PictureInPictureWindow(()=>{
//             console.log('pasing to product name');
//             productName(()=>{
//                 console.log('pass to product desc');
//                 productDesc(()=>{
//                     console.log('All task are done');
//                 })
//             })
//         })
//     })
// })


// function getBread(callback){
//     setTimeout(()=>{
//         const Bread="🍞";
//         console.log("Here is the Bread",Bread
//         );
//         callback(Bread);
//     },100);
// }

// function addTikki(Bread, callback){
//     setTimeout(()=>{
//         const tikki="🍳"+Bread;
//         console.log("Add Tikki on bread",tikki);
//         callback(Bread,tikki)
//     },100);
// }

// function addBread(Bread,tikki,callback){
//     setTimeout(()=>{
//         const burger=Bread+tikki+"🍞";
//         console.log("Add bread on tikki",burger);
//         callback(burger);
//     },100);
// }

// getBread((Bread)=>{
//     addTikki(Bread, (tikki)=>{
//         addBread(Bread, tikki, (burger)=> {
//             console.log("Allo tikki is ready");
//         });
//     });
// });

getPatila((Patila)=>{
    addwater(Patila,(water)=>{
        addtea(Patila,water,(tea)=>{
            addsugar(Patila,water,tea,(sugar)=>{
                addboil(Patila,water,tea,sugar,(boil)=>{
                    addcup(Patila,water,tea,sugar,boil,(cup)=>{
                        console.log("Tea is ready");
                    });
                });
            });
        });
    });
});

function getPatila(callback){
    setTimeout(()=>{
        const Patila = "🍳";
        console.log("First get a pan");
    })
}


