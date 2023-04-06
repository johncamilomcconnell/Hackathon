let quokkaArr = ["https://allthatsinteresting.com/wordpress/wp-content/uploads/2020/03/quokka-leaf-smile-cute.jpg", "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/australia/Quokka_Sam-West.jpg?crop=0%2C886%2C2365%2C1773&wid=640&hei=480&scl=3.6953125", "https://mediaproxy.snopes.com/width/1200/height/1200/https://media.snopes.com/2020/03/Featured-Image-Template36.png", "https://img1.wsimg.com/isteam/ip/0b14ba68-b224-4294-8dd8-e360f8bf3cfd/101138578_167212421502972_1443206056242053120_.jpg", "https://animals.sandiegozoo.org/sites/default/files/inline-images/quokka06.jpg", "https://cdn.shopify.com/s/files/1/0048/4025/9619/articles/quokkahub-smile-daxon.jpg?v=1674013678", "https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/what-is-quokka.jpg?quality=82&strip=all", "https://live-production.wcms.abc-cdn.net.au/119e113a1102ce984df0b3d77972931b?impolicy=wcms_crop_resize&cropH=808&cropW=1080&xPos=0&yPos=401&width=862&height=647", "https://critter.science/wp-content/uploads/2020/05/quokka1.png", "https://www.australiangeographic.com.au/wp-content/uploads/2021/11/quokka-2-1800x1106.jpg", "https://pbs.twimg.com/media/FkxQQJKaAAERbqL.jpg:large", "https://i.ytimg.com/vi/cxk6WECMx3o/maxresdefault.jpg"]


let images = document.getElementsByTagName('img');

//for(let i = 0; i < images.length; i++){
let i = 0;    
let p = 0;
    while ( i < images.length){
      if (p === quokkaArr.length) p = 0;
      images[i].src = quokkaArr[p];
      p++;
      i++;
    }
  //}

  document.addEventListener("scroll", (event) => {
    let images = document.getElementsByTagName('img');
    let i = 0;    
    let p = 0;
    while ( i < images.length){
      if (p === quokkaArr.length) p = 0;
      images[i].src = quokkaArr[p];
      p++;
      i++;
    }
  });

