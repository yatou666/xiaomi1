

{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	console.log(imgs,pagers);
	let banner=document.querySelector(".banner_image");
	let prev=document.querySelector(".banner_btn1");
	let next=document.querySelector(".banner_btn2");

	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");//可以把指定
				pagers[i].classList.remove("btn");//的类名移除
			}
			//ele this pagers[index]
			this.classList.add("btn");
			imgs[index].classList.add("active");
			i=index;
		}
	});


	let n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("btn");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("btn");
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	};
	let flag=true;
	next.onclick=function(){
		// if(flag){
		// 	flag=false;
			move();
		// }

	};
	prev.onclick=function(){
		// if(flag){
		// 	flag=false;
			n=n-2;
			move();
		// }

	}
	imgs.forEach(function(ele,index){
		ele.addEventListener("transitioned",function(){
			flag=true;
		})
	})

}



	//明星单品部分
{	
	const prev1=document.querySelector(".buy_prev");
	const next1=document.querySelector(".buy_next");
	const inner=document.querySelector(".buy_inner");
	
	let m=0;
	next1.onclick=function(){
		m++;
		prev1.classList.remove("disable");
		if(m===2){
			this.classList.add("disable");
		}
		if(m===3){
			m=2;
			return;//终止函数的执行
		}
		inner.style.marginLeft=-992*m+"px";
	}
	prev1.onclick=function(){
		m--;
		next1.classList.remove("disable");
		if(m===0){
			prev1.classList.add("disable");
		}
		if(m===-1){
			m=0;
			return;
		}
		inner.style.marginLeft=-992*m+"px";
	}

	//选项卡内容部分
	function content(parent){
		const types=parent.querySelectorAll("h2");
		const goods=parent.querySelectorAll(".goodlist");
		
		console.log(types);
		console.log(goods);
		

		types.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(let i=0;i<types.length;i++){
					types[i].classList.remove("cactive");
					goods[i].classList.remove("cactive");
				}
				this.classList.add("cactive");
				goods[index].classList.add("cactive");
			}
		})

	}
	const contentlist=document.querySelectorAll(".dd");
	contentlist.forEach(function(ele){
		content(ele)
	});
}


{
//图书效果部分开始
	function bkfz(bkparent){
		let bkcontents=bkparent.querySelectorAll(".bookcontent");
		let bkprev=bkparent.querySelector(".btnl");
		let bknext=bkparent.querySelector(".btnr");
		let bkinner=bkparent.querySelector(".book_inner");
		let dots=bkparent.querySelectorAll(".dot");
		console.log(dots);
		console.log(bkprev);
		console.log(bknext);
		console.log(bkcontents);

		let p=0;
		bknext.onclick=function(){

			p++;
			if(p===bkcontents.length){
				p=bkcontents.length-1;
				return;			
			}
			bkinner.style.left=p*-296+"px";
			dots[p].classList.add("bkactive");
			dots[p-1].classList.remove("bkactive");

		}
		
		
		bkprev.onclick=function(){
			p--;
			if(p<0){
				p=0;
				return;
			}
			bkinner.style.left=p*-296+"px";
			dots[p].classList.add("bkactive");
			dots[p+1].classList.remove("bkactive");
		
		}
		let obj=dots[0];
		dots.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("bkactive");
				ele.classList.add("bkactive");
				obj=ele;
				bkinner.style.left=index*-296+"px";
				n=index;
			}
		})
			
	
	}
	const booklist=document.querySelectorAll(".aa");
	
	console.log(booklist);
	booklist.forEach(function(ele){
		bkfz(ele);
	})
	
}

//为你推荐部分开始
{
	const tjinner=document.querySelector(".tuijian_inner");
	const tjprev=document.querySelector(".tjprev");
	const tjnext=document.querySelector(".tjnext");

	let n=0;
	
	tjnext.onclick=function(){
		n++;
		tjprev.classList.remove("tjdisable");
		
		if(n===4){
			n=3;
			return
			
		}
		if(n===3){
			tjnext.classList.add("tjdisable");
			
			
			
		}
		
		tjinner.style.marginLeft=-1226*n+"px";
	}
	tjprev.onclick=function(){
		n--;
		tjnext.classList.remove("tjdisable");
		if(n===0){
			tjprev.classList.add("tjdisable");
		}
		
		if(n===-1){
			n=0;
			return;		
		}
		
		
		let a=tjinner.style.marginLeft=-1226*n+"px";
		console.log(a);
	}
}
