const icerikler=[
    {id: 1, value: "BEŞİKTAŞ"},
    {id: 2, value: "BEŞİKTAŞ"},
    {id: 3, value: "FENERBAHÇE"},
    {id: 4, value: "FENERBAHÇE"},
    {id: 5, value: "GALATASARAY"},
    {id: 6, value: "GALATASARAY"},
    {id: 7, value: "İSTANBUL"},
    {id: 8, value: "İSTANBUL"},
    {id: 9, value: "BAŞAKŞEHİR"},
    {id: 10, value: "BAŞAKŞEHİR"},
    {id: 11, value: "KASIMPAŞA"},
    {id: 12, value: "KASIMPAŞA"},
    {id: 13, value: "KARAGÜMRÜK"},
    {id: 14, value: "KARAGÜMRÜK"},
    {id: 15, value: "PENDİK"},
    {id: 16, value: "PENDİK"},
];
const kapsayici= document.getElementById("container");
const btnbasla= document.getElementById("startbutton");
let sayac=0;
let kart1=null;
let kart2=null;

btnbasla.addEventListener("click", kartolustur);

function karistir(icerikler){
    for(let i=0; i < icerikler.length;i++){
        const rastgelesayi=Math.floor(Math.random()*(i + 1));
        [icerikler[i], icerikler[rastgelesayi]]=[icerikler[rastgelesayi],icerikler[i]
        ];  
    }
}
function kartolustur(){
    sayac=0;
    kapsayici.innerHTML="";
    karistir(icerikler);
    icerikler.forEach((icerik) => {
        kart1=document.createElement("div");
        kart1.innerHTML="?";
        kart1.className="card";
        kart1.dataset.value=icerik.value;
        kapsayici.appendChild(kart1);
        kart1.addEventListener("click", kartac);
    });
}
function kartac(){
    sayac++;
    console.log(sayac);
    if(sayac==1){
        kart1=this;
        kart1.innerHTML=this.dataset.value;

    } else if(sayac == 2){
        kart2=this;
        kart2.innerHTML=this.dataset.value;
        kartkarsilastir();
    }
}
function kartkarsilastir(){
    console.log(kart1,kart2);
        if(kart1.textContent===kart2.textContent){
            kart1.classList.add("eslesenler");
            kart2.classList.add("eslesenler");
        }else{
            setTimeout(()=>{
                kart1.innerHTML="?";
                kart2.innerHTML="?";
            },1000);
        }
        sayac=0;
}