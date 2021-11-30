document.body.style.backgroundImage="https://c1.wallpaperflare.com/preview/870/861/160/kodaikanal-hill-station-hill-india.jpg"
document.body.style.width="100%"
document.body.style.height="400px"
document.body.style.objectFit="cover"



//Main block
const main= document.createElement("main");
main.style.backgroundColor="grey"
main.style.width ="90%"
main.style.margin="20rem auto 0 auto"
main.style.padding="1rem"
main.style.borderRadius="0.5rem";
main.style.textAlign="start";
document.body.append(main);

//Image
const img =document.createElement("img")
img.src="https://images.pexels.com/photos/39310/wolf-predator-hunter-canis-lupus-39310.jpeg?cs=srgb&dl=pexels-pixabay-39310.jpg&fm=jpg"
img.style.width="10rem"
img.style.height="10rem"
img.style.objectFit="cover"
img.style.borderRadius="10%"
img.style.padding="0.5rem"
img.style.bordert="1px solid #een"
img.style.marginTop="-5rem"
main.append(img)

 //Text
 const name =document.createElement("h1")
 name.textContent = "Wild mountain"
main.append(name)

 //text
 const email= document.createElement("h2")
 email.textContent="mountain@willd.lt"
 email.style.fontSize="medium"
 email.style.color="#grey"
 main.append(email)





