// Load Buttons
// function loadButtons(box, title){ 
//     round1Box.innerHTML = ""; //Clear box
//     document.getElementById(box).classList.remove("show");
//     randomArr(copy.round1Con, "round1Arr");
//     randomArr(copy.round1Pro, "round1Pro");
//     console.log(round1Pro[0]);
//     var header = document.createElement("h1");
//     header.innerText = title;
//     document.getElementById( box).appendChild(header).classList.add("roundHeader");
//     let proNum = Math.floor((Math.random() * buttons) + 1);
//     for(let i = 0; i < (buttons); i++ ){
//         if(i == proNum){
//             var btn = document.createElement("a");
//             var num2 = round1Pro[0];
//             var txt2 = copy.round1Pro[num2];
//             btn.innerHTML = txt2;
//             var classnum = Math.floor((Math.random() * 9) + 1);
//             var classname = "type" + classnum;
//             if(classnum < 8){
//                 document.getElementById( box).appendChild(btn).classList.add("round1button", classname, "next", "btn");
//             } else{
//                 document.getElementById( box).appendChild(btn).classList.add("round1button", classname, "next");
//             }
//             var next = document.getElementsByClassName('next')[0];
//             next.addEventListener("click", round2);
//         } else {
//             var btn = document.createElement("a");
//             var num = round1Arr[i];
//             var txt = copy.round1Con[num];
//             btn.innerHTML = txt;
//             var classnum = Math.floor((Math.random() * 9) + 1);
//             var classname = "type" + classnum;
//             if(classnum < 8){
//                 document.getElementById( box).appendChild(btn).classList.add("round1button", classname, "btn");
//             } else{
//                 document.getElementById( box).appendChild(btn).classList.add("round1button", classname);
//             }        } 
//     }
// }

/* On Start Click
    Start Timer ><
        Start Round 1 ><
            Remove Current Game Contents
            Create 23 False Buttons
                For Each add Random False Text
            Create 1 True Button
                Add Random True Text
                Add Correct ID
            For each add random style
            Add Buttons to page in random order
    On Correct ID click
        Start Round 2 ><
            Add Time split ><
            Remove Current Game Contents
            Create 3 Drop Down Sections
                For Each Create 6 Negative items
                    Give Random Negative Text
                    Give Toggle Switch
                    Set Toggle State Randomly
                For Each Create 1 Positve items
                    Give Random Positve Text
                    Give Toggle Switch
                    Set Toggle State Randomly
                For Each Create 1 Reset item
                    Give Reset Text
                    Give Toggle Switch
                    Set Toggle State On
            Create Cookies Left Counter
                    Set Cookies to number 24 - Number of Correct State Toggles
    On Cookies = 0
        Start Round 3 ><
            Remove Current Game Contents
            Add Time Split ><
            Create 23 False Buttons
                For Each add Random False Text
            Create 1 True Button
                Add Random True Text
                Add Correct ID
            For each add random style
            Add Buttons to page in random order
    On Correct ID click
        Remove Current Game Contents
        Stop Timer ><
            Add Time to Last Time ><
            If Lower then PB, replace Personal Best ><
        Display Finish Message
        Display Try Again
 


*/