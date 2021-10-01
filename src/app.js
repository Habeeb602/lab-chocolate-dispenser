var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

const addChocolates = (chocos, color, count) => {
    
    if(count<=0){
        return "Number cannot be zero/negative";
    }

    for(let i=0;i<count;i++){
        chocos.unshift(color);
    }

}


//Progression 2: Remove ___ chocolates from the top the dispenser

const removeChocolates = (chocos,num) => {

    if(num>chocos.length){
        return "Insufficient chocolates in the dispenser";
    }
    if(num<=0){
        return "Number cannot be zero/negative";
    }
    let res=[];
    for(let i=0;i<num;i++){
        res.push(chocos.shift());
    }
    return res;
}

//Progression 3: Dispense ___ chocolates


const dispenseChocolates = (chocos,num) => {

    if(num>chocos.length){
        return "Insufficient chocolates in the dispenser";
    }
    if(num<=0){
        return "Number cannot be zero/negative";
    }
    let res=[];
    for(let i=0;i<num;i++){
        res.push(chocos.pop());
    }
    return res;
}

//Progression 4: Dispense ___ chocolates of ____ color


const dispenseChocolatesOfColor = (chocos,num,color) => {
    
    if(num<=0){
        return "Number cannot be zero/negative";
    }
    let cnt=0,arr=null;
    for(let i=0;i<chocos.length;i++){
        if(chocos[i]==color){
            cnt++;
        }
    }
    if(cnt>=num){
        arr = new Array(num).fill(color);   
        return arr;
    }

    return "Insufficient chocolates in the dispenser";
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]


const noOfChocolates = (chocolates) => {
    let i, a = new Array(7).fill(0);
    for(i=0;i<chocolates.length;i++){
        switch(chocolates[i]){
            case "green":a[0]++;break;
            case "silver": a[1]++;break;
            case "blue": a[2]++;break;
            case "crimson": a[3]++;break;
            case "purple": a[4]++;break;
            case "red": a[5]++;break;
            case "pink": a[6]++;break;
        }
    }
    let res = [];
    for(i=0;i<a.length;i++){
        if(a[i]>0){
            res.push(a[i]);
        }
    }
    return res;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors


const sortChocolateBasedOnCount = (chocos) => {
    
    let i,j,m = {};
    for(i=0;i<chocos.length;i++){
        if(chocos[i] in m){
            m[chocos[i]]++;
        }
        else{
            m[chocos[i]]=1;
        }
    }

    let n=Object.keys(m).length;
    // console.log(n);
    let a=new Array(),b=new Array();
    for(const k in m)
    {
        a.push(k);
        b.push(m[k]);
      // console.log(`${k}`)
    }
    // console.log(a.length)
    // ["red","blue","green"]
    for(i=0;i<n;i++)
    {
        for(j=0;j<n-i-1;j++)
        {
            if(b[j]<b[j+1])
            {     
              [b[j],b[j+1]]=[b[j+1],b[j]];
              [a[j],a[j+1]]=[a[j+1],a[j]];
            }
        }
    }

    return a;
}


//Progression 7: Change ___ chocolates of ____ color to ____ color


const changeChocolateColor = (chocos, cnt, fcolor) => {


    if(cnt<=0){
        return "Number cannot be zero/negative";
    }
    if(chocos.length==1 && chocos[0]=="blue"){
        return "Can't replace the same chocolates";
    }
    for(let i=0;i<chocos.length;i++){
        chocos[i]="blue";
        cnt--;
    }
    return chocos;
}



//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]


const changeChocolateColorAllOfxCount = (chocos, color, fcolor) => {

    if(chocos.length==1){
         if(chocos[0]=="blue"){
            return "Can't replace the same chocolates";
         }
         return [1,"blue"];
    }

    let cnt=0;
    for(let i=0;i<chocos.length;i++){
        if(chocos[i]==fcolor){
            cnt++;
        }
        if(chocos[i]==color){
            chocos[i]=color;
            cnt++;
        }
    }

    return [cnt,chocos];
}



//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
