import {argv} from 'process'
function check(code:string){
    let s:number =0
    for(let i:number=code.length-2,j=0;i>=0;i--,j++){
        let n:number = parseInt(code[i]);
        if (j%2==0){
            if(n*2>9)s=s+n*2-9;
            
        else s+=n*2;
        

    }else s+=n
}
if((10-s%10)==parseInt(code[code.length-1])){
    console.log('OK')
}else console.log('KO')

}
function getdigit(payload:string){
    let s:number =0
    for(let i:number=payload.length-1,j=0;i>=0;i--,j++){
        let n:number = parseInt(payload[i]);
        if (j%2==0){
            if(n*2>9)s=s+n*2-9;
            
        else s+=n*2;
        

    }else s+=n
    }
    let num= (10-s%10);
    if (isNaN(num)){
        console.log("Error: not a number")
    }else{
        console.log(num)
    }
}
if (argv[2]== "-c")check(argv[3])
else if (argv[2]=="-f"){
    getdigit(argv[3])
}else{
    console.log('Error: Wrong flag')
}