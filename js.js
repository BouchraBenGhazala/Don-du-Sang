
// nom -- region -- telephone -- Groupe sanguin -- CIN

don_tab = new Array();
besoin_tab = new Array();
besoin_button = document.getElementById("besoin");
don_button = document.getElementById("don");
affiche = document.getElementById("last one")
reclamation = document.getElementById("reclamation");
divtab = document.getElementById("divtab");
posibl = [['O+',['O+','O-']], ['O-',['O-']], ['AB+',['AB+','AB-', 'A-', 'A+', 'B-', 'B+', 'O+', 'O-']], ['AB-',['AB-', 'A-', 'B-', 'O-']], ['A+',['A-', 'A+', 'O+', 'O-']], ['A-',['A-','O-']], ['B+',['B-', 'B+', 'O+', 'O-']], ['B-',['B-','O-']]]
nom = document.getElementById("name");
region = document.getElementById("region");
telephone = document.getElementById("telephone");
telephone = document.getElementById("telephone");
Groupe_sanguin = document.getElementById("Groupe sanguin");
CIN = document.getElementById("CIN");
total_don = document.getElementById("total_don");
total_besoin = document.getElementById("total_besoin");
tdon = 0
tbesoin = 0
total_don.innerHTML = String(tdon)
total_besoin.innerHTML = String(tbesoin)
information = new Array();
function add_small_info(reg, blood, etat)
{
    result = document.getElementById(reg + " " + blood + etat)
    text = parseInt(result.innerHTML)
    result.innerHTML = String(text + 1)
}
function get_info()
{
    information.push(nom.value); information.push(region.value); 
    information.push(telephone.value); information.push(Groupe_sanguin.value); information.push(CIN.value);
}
function vider()
{
    nom.value = ""; region.value=""; telephone.value=""; Groupe_sanguin.value=""; CIN.value="";
}
function don_click()
{
    get_info();
    if (information[0]=="" || information[1]=="" ||information[2]=="" || information[3]=="" || information[4]=="" )
    {
        alert("svp remplire toutes les informations")
        information = []
        return;
    }
    divtab.style.display = "none";
    don_tab.push(information);
    add_small_info(information[1], information[3], "D")
    information = []
    tdon = tdon + 1
    total_don.innerHTML = String(tdon)
    vider();
}
function traduire_reg(w)
{
    switch(w)
        {
            case "TTH": return "Tanger - Tétouan - Al Hoceima";
            case "Oriental": return "L'Oriental";
            case "FM": return "Fès - Meknès";
            case "RSK": return " Rabat - Salé - Kénitra";
            case "BMK": return "Beni Mellal - Khénifra";
            case "CS": return "Casablanca - Settat";
            case "MS": return "Marrakech - Safi";
            case "DT": return "Drâa - Tafilalet";
            case "SM": return "Souss -Massa";
            case "GO": return "Guelmim - Oued Noun";
            case "LS": return "Laâyoune - Saguia al Hamra";
            case "DO": return "Dakhla - Oued Ed-Dahab";
        }
}
function cree_tab_info(bloood)
{
    affiche.innerHTML  = '<tr>' + '<th class="TH">REGION</th>' + '<th class="TH">TELEPHONE</th>' + '<th class="TH">&nbsp;&nbsp;GROUPE SANGUIN&nbsp;</th>'+'</tr>'
    for(i=0; i < don_tab.length; i++)
    {
        for(k=0; k < posibl.length; k++)
        {
            if (posibl[k][0] === bloood)
            {
                for(j=0; j < posibl[k][1].length; j++)
                {
                    if(posibl[k][1][j] == don_tab[i][3])
                    {
                        affiche.innerHTML += "<tr> " + '<td class="TD">'+ traduire_reg(don_tab[i][1]) +'</td> ' + '<td class="tele">' + don_tab[i][2] + '</td> ' + '<td class="grps">' + don_tab[i][3]  + '</td> ' +"</tr>"
                    }
                }
            }
        }
    }
}
function besoin_click()
{
    get_info();
    if (information[0]=="" || information[1]=="" ||information[2]=="" || information[3]=="" || information[4]=="" )
    {
        alert("svp remplire toutes les informations")
        information = []
        return;
    }
    cree_tab_info(Groupe_sanguin.value)
    divtab.style.display = "block";
    besoin_tab.push(information);
    add_small_info(information[1], information[3], "B")
    divtab.style.display = "block";
    information = []
    tbesoin = tbesoin + 1
    total_besoin.innerHTML = String(tbesoin)
    vider()
} 
function change_bg(n)
{
    for(i=1;i<=5;i++)
    {
        posi = String(i)
        if (i == n)
        {
        document.getElementById("li"+posi).style.fontSize = "20px"
        document.getElementById("li"+posi).style.backgroundColor = "transparent"
        continue;
        }
        document.getElementById("li"+posi).style.fontSize = "15px"
        document.getElementById("li"+posi).style.backgroundColor = "transparent"
    }
}
window.addEventListener('scroll',(event) => {
    scrool = window.pageYOffset;
    if (scrool < 483)
    {
        document.getElementById("barre").style.backgroundColor = "transparent"
        change_bg(1)
    }
    if (scrool > 483 && scrool < 1222)
    {
        document.getElementById("barre").style.backgroundColor = "transparent"
        change_bg(2)
    }
    if (scrool > 1222 && scrool < 1919)
    {
        document.getElementById("barre").style.backgroundColor = "trnsparent"
        change_bg(3)
    }
    if (scrool > 1860 && scrool < 2400)
    {
        document.getElementById("barre").style.backgroundColor = "transparent"
        change_bg(4)
    }
    if (scrool > 2400)
    {
        document.getElementById("barre").style.backgroundColor = "transparent"
        change_bg(5)
    }
});
besoin_button.onclick = besoin_click;
don_button.onclick = don_click;