

function uniqueID() {
  return Math.floor(Math.random() * Date.now());
}

const cards = [
  {
    pId: uniqueID(),
    pimg: "image/camera.png",
    pname: "Fujifilhm mirrorLess Camera",
    pdes: "X-A7 24.2 MP Mirrorless Camera with XC 15-45mm Lens-Camel",
    pcode: "1001",
    pdisp: 6000,
    pmrp: 4500,
  },
  {
    pId: uniqueID(),

    pimg: "image/watch.png",
    pname: "FitBit Versa SmartWatch",
    pdes: "Versa 3 Health & Fitness Smartwatch with GPS and heart-rate tracking",
    pcode: "1002",
    pdisp: 2000,
    pmrp: 1600,
  },
  {
    pId: uniqueID(),
    pimg: "image/earphones.png",
    pname: "Sony WireLess HeadPhones",
    pdes: "WL-C100 Headphones with noise Cancellation for easier handsfree experience-blue",
    pcode: "1003",
    pdisp: 0,
    pmrp: 300,
  },
  {
    pId: uniqueID(),
    pimg: "image/speaker2.png",
    pname: "Bose Portable Speaker ",
    pdes: "SoundLink flex Bluettoth Portable Speaker ,Wireless Waterproof Speaker for outdoor Travel Black ",
    pcode: "1004",
    pdisp: 2000,
    pmrp: 1800,
  },
  {
    pId: uniqueID(),
    pimg: "image/tablet.png",
    pname: "Samsuang Galaxy Tablet ",
    pdes: "AB Android tablet Wifi 7040mAh Battery 10.5inch TFT Screen Four Speakers 32GB/3GB RAM ROSE ",
    pcode: "1005",
    pdisp: 0,
    pmrp: 2000,
  },
  {
    pId: uniqueID(),
    pimg: "image/printer2.png",
    pname: "Epson InkJet Printer",
    pdes: "EPSON WorkForce Pro WF-3820 DWF All in one Printer .Fax,scan,copy,Printer All in one Printer .Fax,scan,copy,Printer",
    pcode: "1006",
    pdisp: 3000,
    pmrp: 2500,
  },
];


let contentString = "";

let view = cards.map(function (object) {
  contentString += `
    <div class=" card col-sm-12 col-md-6 col-lg-4 mt-3 me-4 shadow bg-body rounded" style="width:26rem;">
                
    <img class="card-img-top" src=${object.pimg} alt="Card image">
    <div class="card-tit">
        <h4 class="card-title mx-3 my-2 ">${object.pname}</h4>
    </div>
    <div class="card-para">
        <p class="card-text mx-3 my-2 ">${object.pdes}
        </p>
    </div>
    <div class="pro-code mb-5 mx-3">
        <p>Product-code:${object.pcode}</p>
    </div>
    <div class="drop-button my-2 ">
        <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" style="color:rgb(66, 150, 150)">
            See More Information
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Full Description</a>
</div>
        
    </div>
    <div class="price  mx-3">
        <p><span>Price : SEK${object.pmrp}</span><span class="discount-price" style="text-decoration:line-through;margin-left:10px ;color:red;">SEK${object.pdisp}</span></p>
    </div>
    <div class="button mx-3 my-1" style="display:flex;justify-content: end;">
        <button type="button" class="btn btn-dark" onclick="Addto('${object.pname}','${object.pmrp}','${object.pdisp}','${object.pId}')" >Add To List</button>

    </div>
</div>
</div>
`;
});


document.getElementsByClassName("ecart")[0].innerHTML = contentString;

let wish = [];
let myid = 0;
let total = 0;

function Addto(pname, mrp, dismrp, proId) {


  let act = dismrp - mrp;

  let a;

  if (act > 0) {
    a = act;
  } else {
    a = 0;
  }

  if (!wish.includes(proId)) {
    wish.push(proId);


    let wishlist = "";

    wishlist = `<li id="${proId}">${pname} -${mrp} (You saved:SEK${a})<span class="links"><a style="color:red" onclick="Remo('${proId}','${pname}' , '${a}' , '${mrp}')">Remove</span>
          </li>`;
    document.getElementById("items").innerHTML += wishlist;
    myid++;


    total = +total + +mrp;

    document.getElementById(
      "totale"
    ).innerHTML = `<h4>Your WishList Total is:SEK ${total}</h4>`;

  } else {
    alert("Item already added in cart");
  }
}
function Remo(proId, pname, a, mrp) {




  document.getElementById(proId).remove();




  let d = wish.indexOf(proId);

  wish.splice(d, 1);
  total = +total - +mrp;

  document.getElementById(
    "totale"
  ).innerHTML = `<h4>Your WishList Total is:SEK ${total}</h4>`;

}
