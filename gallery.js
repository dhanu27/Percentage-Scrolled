var bar=document.getElementById("veiwer-percentage");
var images=document.querySelectorAll(".portfolio-image-container img");
var count=0;
var total=images.length;
console.log(total);
var counting=false;
var vis=[];
for(let i=0; i<total; i++){
    vis[i]=false;
}
console.log(vis);

window.addEventListener("scroll",function(){  
    console.log("hjkl");
    for(let i=0; i<images.length; i++){
        let coordinates=images[i].getBoundingClientRect();
        // console.log(count);
        if(!vis[i]&&coordinates.top<=window.innerHeight){
            // console.log(coordinates.top);
            count++;
            // console.log(count);
            bar.innerHTML=((count/total)*100).toFixed(2) +"%"+" "+"Viewed";
            vis[i]=true;
        }
    }
});
