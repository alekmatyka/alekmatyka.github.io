let buttontext=["Po herezji","Przed herezją"]
let blegion=["<h1>XVI<br>WILKI LUNY / SYNOWIE HORUSA</h1>","<h1>CZARNY LEGION</h1>"]
let wbimg=["assets/WBSymbolPreHeresy.jpg","assets/Wordbearers.png"]

const loreblocks=document.getElementsByClassName("legionlore")

const loredivs=document.getElementsByClassName("heresy")

let legionclass=[
    ["caliban","caliban"],
    ["fulgrim","slaneesh"],
    ["perturabo","perturabo"],
    ["khan","khan"],
    ["fenris","fenris"],
    ["dorn","dorn"],
    ["nostramo","nostramo"],
    ["baal","baal"],
    ["ferrus","ferrus"],
    ["angron","khorne"],
    ["ultra","ultra"],
    ["mortarion","nurgle"],
    ["magnus","arhiman"],
    ["horus","abbadon"],
    ["lorgar","lorgar"],
    ["vulcan","vulcan"],
    ["corvus","corvus"],
    ["alpha","alpha"]
]

let legiondescriptons=[
    ["Planeta pochodzenia: Caliban<br>Prymarcha: Lion el'Johnson<br><br>Czyli co się stanie, jak ryczerzom z okrągłego stołu dasz power armor i granatniki.<br><br> Spośród Legionów to oni mieli zawsze najlepsze zabawki.",
        "Po herezji główną misją Aniołow z Calibana jest znajdywanie zdrajców z własnego legionu - tzw. Upadłych i upewnianie się, że nikt, ale to absolutnie nikt, o nich nie wie"],
    ["Planeta pochodzenia: Chemos<br>Prymarcha: Fulgrim<br><br>Jest to legion wojowników-perfekcjonistów, dążących do idelizmu we wszystkim co robią - walce, taktyce, sztuce itp.",
        "Teraz jest to legion hedonistów, całkowicie poświęcony Slaneesh, Księciu Rozpusty i Przepychu.<br><br> Ich misją jest poszukiwanie coraz to nowszych i mocniejszych wrażeń <br>(aczkoliwek, nie seksualnych)"],
    ["Planeta pochodzenia: Olympia<br>Prymarcha: Perturabo (a.k.a Beksalala, Piotrek Turbosz (Peter Turbo))<br><br>Żelaźni wojownicy to legion okropliwie upartych, naburmuszonych inżynierów, wykorzystujących wszelakie zasoby ludzkie i materialne do niekończących się oblężeń i budowania fortyfikacji<br><br>Nienawidzą Imperialnych Pięści",
        "Planeta pochodzenia: Olympia<br>Prymarcha: Perturabo (a.k.a Beksalala, Piotrek Turbosz (Peter Turbo))<br><br>Żelaźni wojownicy to legion okropliwie upartych, naburmuszonych inżynierów, wykorzystujących wszelakie zasoby <s>ludzkie</s> demoniczne i materialne do niekończących się oblężeń i budowania fortyfikacji<br><br>Nienawidzą Imperialnych Pięści"],
    ["Planeta pochodzenia: Chogoris<br>Prymarcha: Jaghatai Khan<br><br>Zdenerwowali cię kiedyś rowerzyści? Jeśli tak, to wyobraź se 1000 takich rowerzystów, jadących na motocyklach wielkości 2 fiatów cinquecento z prędkością 300 km/h, jednocześnie wymachujących w twoją strone pistoletami o kalbrze 5cm, a dostaniesz Białe Szramy.<br>O, i to wszystko w akompniamencie mongolskiego śpiewu gardłowego.<br><br>Ale żeby być szczerym, to tak naprawde są spoko ziomki, tylko robia tak dla niepoznaki.",
        "Planeta pochodzenia: Chogoris<br>Prymarcha: Jaghatai Khan<br><br>Zdenerwowali cię kiedyś rowerzyści? Jeśli tak, to wyobraź se 1000 takich rowerzystów, jadących na motocyklach wielkości 2 fiatów cinquecento z prędkością 300 km/h, jednocześnie wymachujących w twoją strone pistoletami o kalbrze 5cm, a dostaniesz Białe Szramy.<br>O, i to wszystko w akompniamencie mongolskiego śpiewu gardłowego.<br><br>Ale żeby być szczerym, to tak naprawde są spoko ziomki, tylko robia tak dla niepoznaki."],
    ["Planeta pochodzenia: Fenris<br>Prymarcha: Leman Russ<br><br> Weź wikingów, zmieszaj z furrasami i wilkołakami i przyspawaj tonę uzbrojenia, a otrzymasz Kosmiczne Wilki. <br><br>Uwielbiają rozpowiadać, gdzie tylko się da, o swoich wyczynach, dokonaniach i zdobyczach<br><br> Nie cierpią nerdów z Tysiąca Synów <br> (Magia jest be).",
        "Planeta pochodzenia: Fenris<br>Prymarcha: Leman Russ<br><br> Weź wikingów, zmieszaj z furrasami i wilkołakami i przyspawaj tonę uzbrojenia, a otrzymasz Kosmiczne Wilki. <br><br>Uwielbiają rozpowiadać, gdzie tylko się da, o swoich wyczynach, dokonaniach i zdobyczach<br><br> Nie cierpią nerdów z Tysiąca Synów <br> (Magia jest be)."],
    ["Planeta pochodzenia: Inwit / 'Falanga' (stacja kosmiczna wielkości księżyca)<br>Prymarcha: Rogal Dorn<br><br>Jest to legion gości o osbowowści cegły, uwielbiających budować i utrzymywać fortyfikacje<br><br>Nie lubią się z Żelaznymi Wojownikami",
        "Planeta pochodzenia: Inwit / 'Falanga' (stacja kosmiczna wielkości księżyca)<br>Prymarcha: Rogal Dorn<br><br>Jest to legion gości o osbowowści cegły, uwielbiających budować i utrzymywać fortyfikacje<br><br>Nie lubią się z Żelaznymi Wojownikami"],
    ["Planeta pochodzenia: Nostramo<br>Prymarcha: Konrad Curze<br><br> Szeregi VIII legionu składają sie z największych zbrodniarzy, sadystów i przestępców, jakich tylko możecie sobie wyobraźić.<br><br>Ich taktyka jest prosta - stosować terroryzm, tortury i zastraszanie populacji do tego momentu, że inny światy poddają się od razu na wieść tego, że przybywają Władcy Nocy",
        "nostPlaneta pochodzenia: Nostramo<br>Prymarcha: Konrad Curze<br><br> Szeregi VIII legionu składają sie z największych zbrodniarzy, sadystów i przestępców, jakich tylko możecie sobie wyobraźić.<br><br>Ich taktyka jest prosta - stosować terroryzm, tortury i zastraszanie populacji do tego momentu, że inny światy poddają się od razu na wieść tego, że przybywają Władcy Nocyramo"],
    ["Planeta pochodzenia: Baal<br>Prymarcha: Sanguinius<br><br>Legion prystojnych, wyrafinowanych artystów i poetów, powszechnie uwielbiany, szczególnie dzięki sojemu pyrmarsze - anielskiemu (dosłownie) Sanguiniusowi<br><br>Jest jeden <i>drobny</i> szczegół - wszyscy z nich mają wampiryczne zapędy do konsumowania ludzkiej krwi i ciała",
        "Po śmierci ich genoojca z rąk arcyzdrajcy Horusa na legion Krwawych Aniołów zapadła klątwa - <i>Czarny Szał</i><br><br>Ci z legionistów, który padli w objęcia szału, myślą, że są Sanguiniusem - na chwile przed jego śmiercią. A każda istota, jaką widzą, jest dla nich Horusem samym w sobie. <br> Przest to bezmyśłnie atakują wszystko, co tylko podejdzie im pod koniec miecza."],
    ["Planeta pochodzenia: Medusa<br>Prymarcha: Ferrus Manus<br><br>Witajcie w Żelaznych Dłoniach, legionie z prymachą o ramionach z metalu, którego imie oznacza 'żelazna ręka', ze statkiem flagowym o nazwie 'Dłoń z Żelaza'<br><br> X legion wierzy bezkresnie w zasade przetrwania najsilniejszych, niezaleznie od sytuacji. <br>Według nich, ich ciało jest słabością samą w sobie, co naprawiają przez cybernetyczne wszczepy i zamianę kończyn na mechaniczne protezy (co było jrdnak ograniczane przez Ferrusa).",
        "W rozpaczy po śmierci swego prymarchy na samym początku Herezji z rąk jego brata Fulgirma, legion ten stał się jeszcze bardziej nieludzki, całkowicie oddając się cybernetycznym transformacjom"],
    ["Planeta pochodzenia: Nuceria <br>Prymarcha: Angron<br><br>Jest to legion gladiatorów-berserkerów, którzy, by upodobnic się i zyskać sympatię ich prymarchy, wszczepili sobie tzw. <i>Gwoździe Rzeźnika</i>, czyli urządzenie sprawiające ból i cierpienie wtedy, kiedy nie odczuwasz agresji i nie zabijasz",
        "Poświęceni bogowi chaosu Khornowi, ich Gwoździe zniszczyły ich umysły do tego stopnia, że są teraz jedynie bezmyślnymi barbarzyńcami mających na myśli jedynie mord i przelew krwi <br><br> (upadek legionu i Angrona to naprawde zajebista historia - przeczytajcie <i>Betrayer</i> Aarona Dembskiego-Bowdena)"],
    ["Planeta pochodzenia: Macragge / 500 systemów Ultramaru <br>Prymarcha: Robute Guiliman (a.k.a: Bobby-G, Bobby G-String, Robot Gorillaman, Papa Smurf, Rabbi Goldman, Rowboat Girlyman, Row-row-row-your-boat-gently-down-the-stream-liman, Człowiek-Excel, Mszący Liczyciel Fasolek (to od Konrada), Bluberry Pie, Big Blue Boyscout, Robu (to od jego mamy))<hr><br>Witajcie w Ultramarines, posterboysach posterboysów Warhamerra 40k. Jest to prawdopodobnie najnudniejszy o najnormalniejszy z legionów, będąc poniekąd legionami rzymskimi przeniesionymi 40000 lat w przód. <br><br> Zatem co jest takiego fajnego w ultramarynarzach? <br><br>Są to naprawde kompetentni gości. Prawdopodobnie jako jedni z jedynych w całym Imperium miają naprawde sprawną administrację i umiejetności logistyczne. <br> Dzięki temu Ultramarines sa największym spośród legionów - w szczycie swojej siły mieli ponad ćwierć miliona Astartes w szeregach", 
        "Nie za wiele się u nich zmieniło, biorąc pod uwage kulture i zachowanie. <br><br> Są zawiłymi fanami Kosmicznej-Książki&trade; swojego genoojca, traktując ją jak biblię i podążając jej zapisami co do joty"],
    ["mortarion",
        "nurgle"],
    ["magnus",
        "arhiman"],
    ["horus",
        "abbadon"],
    ["lorgar",
        "lorgar"],
    ["vulcan",
        "vulcan"],
    ["corvus",
        "corvus"],
    ["alpha",
        "alpha"]
]

let counter=[]
for(let i=0;i<18;i++){
    counter.push(0)
}

console.log(legionclass[2][1])

for(let i=0;i<18;i++){
    loreblocks[i].innerHTML=legiondescriptons[i][0]
}
//--------------------------------------------------
// const buttonEC = document.getElementById("button_EC")

// buttonEC.addEventListener("click", (e)=>{

//     legioncounter[2]=(legioncounter[2]+1)%2
//     loreblocks[2].innerHTML=legioncontent[2][legioncounter[2]]
//     buttonEC.innerHTML=buttontext[legioncounter[2]]
// })

const bts = document.getElementsByClassName("button")

console.log("dlg bt "+loredivs.length)
console.log(loredivs)

for(let i=0;i<18;i++){
    bts[i].addEventListener("click",(e)=>{
        counter[i] = (counter[i]+1)%2
        loreblocks[i].innerHTML=legiondescriptons[i][counter[i]]
        loredivs[i].classList="loreblock "+legionclass[i][counter[i]]+" heresy"
        
        bts[i].innerHTML=buttontext[counter[i]]

        if(i==13){
            //horus
            let title = document.getElementById("blegion")
            title.innerHTML=blegion[counter[i]]
        }

        if(i==14){
            //lorgar
            let image = document.getElementById("wb")
            image.setAttribute("src",wbimg[counter[i]])
        }
    }) 
}