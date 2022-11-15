window.onload= function(){
    const sudokus = {
        facil: {NoRes: "6-17---3----5----624----1---3--4-29---51-93---64-5--1---7----233----8----9---34-1", 
        Res:"651794832873521946249836157138647295725189364964352718487915623312468579596273481"},
        intermig: {NoRes: "---4-6-979--32--5----75-6---3---7--9-5--4--1-8--9---7---5-94----9--73--634-8-1---", 
        Res:"523416897976328451184759632432187569759642318861935274615294783298573146347861925"},
        dificil: {NoRes: "-6---743-----6------7--56-2-7-9-8--1-23---87-1--4-3-2-4-51--7------4-----127---4-", 
        Res:"261897435539264187847315692674928351923651874158473926495132768786549213312786549"},
    }
    const filas = {1: {1:0,2:1,3:2,4:3,5:4,6:5,7:6,8:7,9:8},
        2: {1:9,2:10,3:11,4:12,5:13,6:14,7:15,8:16,9:17},
        3: {1:18,2:19,3:20,4:21,5:22,6:23,7:24,8:25,9:26},
        4: {1:27,2:28,3:29,4:30,5:31,6:32,7:33,8:34,9:35},
        5: {1:36,2:37,3:38,4:39,5:40,6:41,7:42,8:43,9:44},
        6: {1:45,2:46,3:47,4:48,5:49,6:50,7:51,8:52,9:53},
        7: {1:54,2:55,3:56,4:57,5:58,6:59,7:60,8:61,9:62},
        8: {1:63,2:64,3:65,4:66,5:67,6:68,7:69,8:70,9:71},
        9: {1:72,2:73,3:74,4:75,5:76,6:77,7:78,8:79,9:80},
    }
    let inp, num, diff, m, s, interval, taula,seg=0,min=0;
    // let interval2;
    function crono(){
        seg++;
        if (seg==60) {
            min++;
            seg=0;
        }
        m = min < 10 ? "0" + min : min;
        s = seg < 10 ? "0" + seg : seg;
        document.getElementById('crono').innerHTML=(`${m} : ${s}`);
    }
    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
    });
    // function focus() {
    //     if (!document.hasFocus()) {
    //         console.log(interval);
    //         clearInterval(interval);
    //         console.log("adious");
    //         console.log(interval);
    //     } else {
    //         console.log("hola");
    //         console.log(interval);
    //         console.log("hola dentro if");
    //         interval = setInterval(crono,1000);
    //         console.log(interval);
    //     }
    // }
    document.getElementById('inicia').onclick= function(){
        taula = document.getElementById("taula");
        document.getElementById("divsudoku").classList.remove("hidden");
        if (taula.firstChild!=null) {
            while (taula.firstChild) {
                taula.removeChild(taula.lastChild);
            }
        }
        if (seg>0 || min>0) {
            seg=0;
            min=0;
        }
        clearInterval(interval);
        crono();
        interval = setInterval(crono,1000);
        // interval2 = setInterval(focus, 300);
        CreaSudoku();
        window.scrollBy(0,630);
        // window.scrollBy({
        //     top: 0,
        //     bottom: 630,
        //     behavior: 'smooth'
        //   });
    }
    function CreaSudoku() {
        diff = SelectorDiff();
        let cont=0;
        for (let i = 0; i < diff.NoRes.length; i++) {
            inp = document.createElement("input");
            num = document.createElement("p");
            inp.setAttribute("type","text");
            inp.setAttribute("maxlength","1");
            num.classList.add("numsud");
            num.appendChild(inp);
            let cont2="a" + cont;
            num.setAttribute("id", cont2);
            cont++;
            let idnum = parseInt(num.id.charAt(1)+num.id.charAt(2));
            if (diff.NoRes.charAt(i)!="-") {
                num.textContent = diff.NoRes.charAt(i);
                num.classList.add("numstatic");
            }
            inp.addEventListener("mouseenter", function () {
                document.getElementById(cont2).classList.add("select");
                let calc=0;
                if (idnum ==0 || idnum == 1||idnum == 2 || idnum ==9 ||idnum ==10 || idnum == 11 || idnum ==18 ||idnum ==19 || idnum == 20) { 
                    document.getElementById("a"+0).classList.add("quadre");
                    document.getElementById("a"+1).classList.add("quadre");
                    document.getElementById("a"+2).classList.add("quadre");
                    document.getElementById("a"+9).classList.add("quadre");
                    document.getElementById("a"+10).classList.add("quadre");
                    document.getElementById("a"+11).classList.add("quadre");
                    document.getElementById("a"+18).classList.add("quadre");
                    document.getElementById("a"+19).classList.add("quadre");
                    document.getElementById("a"+20).classList.add("quadre");
                }
                if (idnum ==3 ||idnum ==4 || idnum == 5 || idnum ==12 ||idnum ==13 || idnum == 14 ||idnum ==22 || idnum==21 || idnum == 23) {
                    document.getElementById("a"+3).classList.add("quadre");
                    document.getElementById("a"+4).classList.add("quadre");
                    document.getElementById("a"+5).classList.add("quadre");
                    document.getElementById("a"+12).classList.add("quadre");
                    document.getElementById("a"+13).classList.add("quadre");
                    document.getElementById("a"+14).classList.add("quadre");
                    document.getElementById("a"+21).classList.add("quadre");
                    document.getElementById("a"+22).classList.add("quadre");
                    document.getElementById("a"+23).classList.add("quadre");
                }
                if (idnum ==6 ||idnum ==7 || idnum == 8 || idnum ==15 ||idnum ==16 || idnum == 17 || idnum ==24 ||idnum ==25 || idnum == 26) {
                    document.getElementById("a"+6).classList.add("quadre");
                    document.getElementById("a"+7).classList.add("quadre");
                    document.getElementById("a"+8).classList.add("quadre");
                    document.getElementById("a"+15).classList.add("quadre");
                    document.getElementById("a"+16).classList.add("quadre");
                    document.getElementById("a"+17).classList.add("quadre");
                    document.getElementById("a"+24).classList.add("quadre");
                    document.getElementById("a"+25).classList.add("quadre");
                    document.getElementById("a"+26).classList.add("quadre");
                }
                //sdf
                if (idnum ==27 ||idnum ==28 || idnum == 29 || idnum ==36 ||idnum ==37 || idnum == 38 || idnum ==45 ||idnum ==46 || idnum == 47) {
                    document.getElementById("a"+27).classList.add("quadre");
                    document.getElementById("a"+28).classList.add("quadre");
                    document.getElementById("a"+29).classList.add("quadre");
                    document.getElementById("a"+36).classList.add("quadre");
                    document.getElementById("a"+37).classList.add("quadre");
                    document.getElementById("a"+38).classList.add("quadre");
                    document.getElementById("a"+45).classList.add("quadre");
                    document.getElementById("a"+47).classList.add("quadre");
                    document.getElementById("a"+46).classList.add("quadre");
                }
                if (idnum ==30 ||idnum ==31 || idnum == 32 || idnum ==39 ||idnum ==40 || idnum == 41 || idnum ==48 ||idnum ==49 || idnum == 50) {
                    document.getElementById("a"+30).classList.add("quadre");
                    document.getElementById("a"+31).classList.add("quadre");
                    document.getElementById("a"+32).classList.add("quadre");
                    document.getElementById("a"+39).classList.add("quadre");
                    document.getElementById("a"+40).classList.add("quadre");
                    document.getElementById("a"+41).classList.add("quadre");
                    document.getElementById("a"+48).classList.add("quadre");
                    document.getElementById("a"+49).classList.add("quadre");
                    document.getElementById("a"+50).classList.add("quadre");
                }
                if (idnum ==33 ||idnum ==34 || idnum == 35 || idnum ==42 ||idnum ==43 || idnum == 44 || idnum ==51 ||idnum ==52 || idnum == 53) {
                    document.getElementById("a"+33).classList.add("quadre");
                    document.getElementById("a"+34).classList.add("quadre");
                    document.getElementById("a"+35).classList.add("quadre");
                    document.getElementById("a"+42).classList.add("quadre");
                    document.getElementById("a"+44).classList.add("quadre");
                    document.getElementById("a"+51).classList.add("quadre");
                    document.getElementById("a"+52).classList.add("quadre");
                    document.getElementById("a"+53).classList.add("quadre");
                    document.getElementById("a"+43).classList.add("quadre");
                }
                //sdfgdg
                if (idnum ==54 ||idnum ==55 || idnum == 56 || idnum ==63 ||idnum ==64 || idnum == 65 || idnum ==72 ||idnum ==73 || idnum == 74) {
                    document.getElementById("a"+54).classList.add("quadre");
                    document.getElementById("a"+55).classList.add("quadre");
                    document.getElementById("a"+56).classList.add("quadre");
                    document.getElementById("a"+63).classList.add("quadre");
                    document.getElementById("a"+64).classList.add("quadre");
                    document.getElementById("a"+65).classList.add("quadre");
                    document.getElementById("a"+72).classList.add("quadre");
                    document.getElementById("a"+73).classList.add("quadre");
                    document.getElementById("a"+74).classList.add("quadre");
                }
                if (idnum ==57 ||idnum ==58 || idnum == 59 || idnum ==66 ||idnum ==67 || idnum == 68 || idnum ==75 ||idnum ==76 || idnum == 77) {
                    document.getElementById("a"+57).classList.add("quadre");
                    document.getElementById("a"+59).classList.add("quadre");
                    document.getElementById("a"+58).classList.add("quadre");
                    document.getElementById("a"+66).classList.add("quadre");
                    document.getElementById("a"+67).classList.add("quadre");
                    document.getElementById("a"+68).classList.add("quadre");
                    document.getElementById("a"+75).classList.add("quadre");
                    document.getElementById("a"+76).classList.add("quadre");
                    document.getElementById("a"+77).classList.add("quadre");
                }
                if (idnum ==60 ||idnum ==61 || idnum == 62 || idnum ==69 ||idnum ==70 || idnum == 71 || idnum ==78 ||idnum ==79 || idnum == 80) {
                    document.getElementById("a"+60).classList.add("quadre");
                    document.getElementById("a"+61).classList.add("quadre");
                    document.getElementById("a"+62).classList.add("quadre");
                    document.getElementById("a"+69).classList.add("quadre");
                    document.getElementById("a"+70).classList.add("quadre");
                    document.getElementById("a"+71).classList.add("quadre");
                    document.getElementById("a"+78).classList.add("quadre");
                    document.getElementById("a"+79).classList.add("quadre");
                    document.getElementById("a"+80).classList.add("quadre");
                }
                for (let i = 0; i < 81; i++) {
                    if (Math.trunc(i/9) == Math.trunc(idnum/9)) {
                        document.getElementById("a"+i).classList.add("columna");
                    }
                    if (i%9 == idnum%9) {
                        document.getElementById("a"+i).classList.add("fila");
                    }
                }
                document.getElementById(cont2).classList.add("select");
            })
            inp.addEventListener("mouseleave", function () {
                document.getElementById(cont2).classList.remove("select");
                let calc=0;
                console.log(idnum);
                console.log(i);
                for (let i = 0; i < 81; i++) {
                    if (Math.trunc(i/9) == Math.trunc(idnum/9)) {
                        document.getElementById("a"+i).classList.remove("columna");
                    }
                    if (i%9 == idnum%9) {
                        document.getElementById("a"+i).classList.remove("fila");
                    }
                }
                if (idnum ==0 || idnum == 1||idnum == 2 || idnum ==9 ||idnum ==10 || idnum == 11 || idnum ==18 ||idnum ==19 || idnum == 20) { 
                    document.getElementById("a"+0).classList.remove("quadre");
                    document.getElementById("a"+1).classList.remove("quadre");
                    document.getElementById("a"+2).classList.remove("quadre");
                    document.getElementById("a"+9).classList.remove("quadre");
                    document.getElementById("a"+10).classList.remove("quadre");
                    document.getElementById("a"+11).classList.remove("quadre");
                    document.getElementById("a"+18).classList.remove("quadre");
                    document.getElementById("a"+19).classList.remove("quadre");
                    document.getElementById("a"+20).classList.remove("quadre");
                }
                if (idnum ==3 ||idnum ==4 || idnum == 5 || idnum ==12 ||idnum ==13 || idnum == 14 ||idnum ==22 || idnum==21 || idnum == 23) {
                    document.getElementById("a"+3).classList.remove("quadre");
                    document.getElementById("a"+4).classList.remove("quadre");
                    document.getElementById("a"+5).classList.remove("quadre");
                    document.getElementById("a"+12).classList.remove("quadre");
                    document.getElementById("a"+13).classList.remove("quadre");
                    document.getElementById("a"+14).classList.remove("quadre");
                    document.getElementById("a"+21).classList.remove("quadre");
                    document.getElementById("a"+22).classList.remove("quadre");
                    document.getElementById("a"+23).classList.remove("quadre");
                }
                if (idnum ==6 ||idnum ==7 || idnum == 8 || idnum ==15 ||idnum ==16 || idnum == 17 || idnum ==24 ||idnum ==25 || idnum == 26) {
                    document.getElementById("a"+6).classList.remove("quadre");
                    document.getElementById("a"+7).classList.remove("quadre");
                    document.getElementById("a"+8).classList.remove("quadre");
                    document.getElementById("a"+15).classList.remove("quadre");
                    document.getElementById("a"+16).classList.remove("quadre");
                    document.getElementById("a"+17).classList.remove("quadre");
                    document.getElementById("a"+24).classList.remove("quadre");
                    document.getElementById("a"+25).classList.remove("quadre");
                    document.getElementById("a"+26).classList.remove("quadre");
                }
                //sdf
                if (idnum ==27 ||idnum ==28 || idnum == 29 || idnum ==36 ||idnum ==37 || idnum == 38 || idnum ==45 ||idnum ==46 || idnum == 47) {
                    document.getElementById("a"+27).classList.remove("quadre");
                    document.getElementById("a"+28).classList.remove("quadre");
                    document.getElementById("a"+29).classList.remove("quadre");
                    document.getElementById("a"+36).classList.remove("quadre");
                    document.getElementById("a"+37).classList.remove("quadre");
                    document.getElementById("a"+38).classList.remove("quadre");
                    document.getElementById("a"+45).classList.remove("quadre");
                    document.getElementById("a"+47).classList.remove("quadre");
                    document.getElementById("a"+46).classList.remove("quadre");
                }
                if (idnum ==30 ||idnum ==31 || idnum == 32 || idnum ==39 ||idnum ==40 || idnum == 41 || idnum ==48 ||idnum ==49 || idnum == 50) {
                    document.getElementById("a"+30).classList.remove("quadre");
                    document.getElementById("a"+31).classList.remove("quadre");
                    document.getElementById("a"+32).classList.remove("quadre");
                    document.getElementById("a"+39).classList.remove("quadre");
                    document.getElementById("a"+40).classList.remove("quadre");
                    document.getElementById("a"+41).classList.remove("quadre");
                    document.getElementById("a"+48).classList.remove("quadre");
                    document.getElementById("a"+49).classList.remove("quadre");
                    document.getElementById("a"+50).classList.remove("quadre");
                }
                if (idnum ==33 ||idnum ==34 || idnum == 35 || idnum ==42 ||idnum ==43 || idnum == 44 || idnum ==51 ||idnum ==52 || idnum == 53) {
                    document.getElementById("a"+33).classList.remove("quadre");
                    document.getElementById("a"+34).classList.remove("quadre");
                    document.getElementById("a"+35).classList.remove("quadre");
                    document.getElementById("a"+42).classList.remove("quadre");
                    document.getElementById("a"+44).classList.remove("quadre");
                    document.getElementById("a"+51).classList.remove("quadre");
                    document.getElementById("a"+52).classList.remove("quadre");
                    document.getElementById("a"+53).classList.remove("quadre");
                    document.getElementById("a"+43).classList.remove("quadre");
                }
                //sdfgdg
                if (idnum ==54 ||idnum ==55 || idnum == 56 || idnum ==63 ||idnum ==64 || idnum == 65 || idnum ==72 ||idnum ==73 || idnum == 74) {
                    document.getElementById("a"+54).classList.remove("quadre");
                    document.getElementById("a"+55).classList.remove("quadre");
                    document.getElementById("a"+56).classList.remove("quadre");
                    document.getElementById("a"+63).classList.remove("quadre");
                    document.getElementById("a"+64).classList.remove("quadre");
                    document.getElementById("a"+65).classList.remove("quadre");
                    document.getElementById("a"+72).classList.remove("quadre");
                    document.getElementById("a"+73).classList.remove("quadre");
                    document.getElementById("a"+74).classList.remove("quadre");
                }
                if (idnum ==57 ||idnum ==58 || idnum == 59 || idnum ==66 ||idnum ==67 || idnum == 68 || idnum ==75 ||idnum ==76 || idnum == 77) {
                    document.getElementById("a"+57).classList.remove("quadre");
                    document.getElementById("a"+59).classList.remove("quadre");
                    document.getElementById("a"+58).classList.remove("quadre");
                    document.getElementById("a"+66).classList.remove("quadre");
                    document.getElementById("a"+67).classList.remove("quadre");
                    document.getElementById("a"+68).classList.remove("quadre");
                    document.getElementById("a"+75).classList.remove("quadre");
                    document.getElementById("a"+76).classList.remove("quadre");
                    document.getElementById("a"+77).classList.remove("quadre");
                }
                if (idnum ==60 ||idnum ==61 || idnum == 62 || idnum ==69 ||idnum ==70 || idnum == 71 || idnum ==78 ||idnum ==79 || idnum == 80) {
                    document.getElementById("a"+60).classList.remove("quadre");
                    document.getElementById("a"+61).classList.remove("quadre");
                    document.getElementById("a"+62).classList.remove("quadre");
                    document.getElementById("a"+69).classList.remove("quadre");
                    document.getElementById("a"+70).classList.remove("quadre");
                    document.getElementById("a"+71).classList.remove("quadre");
                    document.getElementById("a"+78).classList.remove("quadre");
                    document.getElementById("a"+79).classList.remove("quadre");
                    document.getElementById("a"+80).classList.remove("quadre");
                }
            })
            if (idnum <= 8 || (idnum > 53 && idnum < 63)|| (idnum > 26 && idnum < 36)) {
                num.classList.add("topbar");
            }
            if ((idnum > 71 && idnum < 81)) {
                num.classList.add("bottombar");
            }
            if ((idnum %3) == 0) {
                num.classList.add("leftbar");
            }
            if (idnum == 8 || idnum == 17 ||idnum == 26 ||idnum == 35 ||idnum == 44 ||idnum == 53 ||idnum == 62 ||idnum == 71 ||idnum == 80) {
                num.classList.add("rightbar");
            }
            document.getElementById("taula").appendChild(num);
        }
    }
    function SelectorDiff() {
        let diff1 = document.forms["nivell"]["nivell"].value;
        let diff2;
        if (diff1=="facil") {
            diff2 = sudokus.facil;
            return diff2;
        } else if (diff1=="medio") {
            diff2 = sudokus.intermig;
            return diff2;
        } else if (diff1=="dificil") {
            diff2 = sudokus.dificil;
            return diff2;
        }
    }
    document.getElementById('comprova').onclick= function(){
        let errors=0;
        let acerts=0;
        for (let i = 0; i < diff.NoRes.length; i++) {
            let idnum = "a" + i;
            let inp2 = document.getElementById(idnum);
            if (diff.NoRes.charAt(i)=="-") {
                if (diff.Res.charAt(i)!=inp2.firstChild.value) {
                    inp2.classList.add("error");
                    errors++;
                }
                else if (diff.Res.charAt(i)==inp2.firstChild.value) {
                    inp2.classList.add("correcte");
                    acerts++;
                }
            }    
        }
        clearInterval(interval);
        if (errors!=0) {
            document.getElementById('resultat').innerHTML=(`Has completat el sudoku en ${m} : ${s} amb `+errors+` errors i `+acerts+` acerts.`);
        } else{
            document.getElementById('resultat').innerHTML=(`Enhorabona! Has completat el sudoku en ${m} : ${s} amb `+errors+` errors.`);
        }
    }
    document.getElementById('resol').ondblclick= function(){
        taula = document.getElementById("taula");
        let cont=0;
        while (taula.firstChild) {
            taula.removeChild(taula.lastChild);
        }
        for (let i = 0; i < diff.Res.length; i++) {
            num = document.createElement("p");
            num.classList.add("numsud");
            num.classList.add("numstatic");
            num.textContent = diff.Res.charAt(i);
            num.setAttribute("id", cont);
            cont++;
            if (num.id <= 8 || (num.id > 53 && num.id < 63)|| (num.id > 26 && num.id < 36)) {
                num.classList.add("topbar");
            }
            if ((num.id > 71 && num.id < 81)) {
                num.classList.add("bottombar");
            }
            if ((num.id %3) == 0) {
                num.classList.add("leftbar");
            }
            if (num.id == 8 || num.id == 17 ||num.id == 26 ||num.id == 35 ||num.id == 44 ||num.id == 53 ||num.id == 62 ||num.id == 71 ||num.id == 80) {
                num.classList.add("rightbar");
            }
            document.getElementById("taula").appendChild(num);
        }
    }
}