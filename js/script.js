var product = [{
    id: 1,
    img: 'img/ชานม/โกโก้.jpg',
    name: 'โกโก้',
    price: 30,
    description: '',
    type: 'tea'
}, {
    id: 2,
    img: 'img/ชานม/ชาเขียว.jpg',
    name: 'ชาเขียว',
    price: 30,
    description: '',
    type: 'tea'
}, {
    id: 3,
    img: 'img/ชานม/ชานมใต้หวัน.jpg',
    name: 'ชานมใต้หวัน',
    price: 30,
    description: '',
    type: 'tea'
},{
    id: 4,
    img: 'img/ชานม/ชาไทย.jpg',
    name: 'ชาไทย',
    price: 30,
    description: '',
    type: 'tea'
},{
    id: 5,
    img: 'img/ชานม/นมชมพู.jpg',
    name: 'นมชมพู',
    price: 30,
    description: '',
    type: 'tea'
},{
    id: 6,
    img: 'img/ชานม/เผือกหอม.jpg',
    name: 'เผือกหอม',
    price: 30,
    description: '',
    type: 'tea'
},{
    id: 7,
    img: 'img/กาแฟ/โกโก้2.jpg',
    name: 'โกโก้ธรรมดา',
    price: 30,
    description: '',
    type: 'coffee'
},{
    id: 8,
    img: 'img/กาแฟ/คาปูชิโน.jpg',
    name: 'คาปูชิโน',
    price: 30,
    description: '',
    type: 'coffee'
},{
    id: 9,
    img: 'img/กาแฟ/ชาดำ.jpg',
    name: 'ชาดำ',
    price: 30,
    description: '',
    type: 'coffee'
},{
    id: 10,
    img: 'img/กาแฟ/มอคค่า.jpg',
    name: 'มอคค่า',
    price: 30,
    description: '',
    type: 'coffee'
},{
    id: 11,
    img: 'img/กาแฟ/ไมโล.jpg',
    name: 'ไมโล',
    price: 30,
    description: '',
    type: 'coffee'
},{
    id: 12,
    img: 'img/กาแฟ/เอสเปรสโซ่.jpg',
    name: 'เอสเปรสโซ',
    price: 30,
    description: '',
    type: 'coffee'
},{
    id: 13,
    img: 'img/กาแฟ/โอวัลติน.jpg',
    name: 'โอวัลติน',
    price: 30,
    description: '',
    type: 'coffee'
},{
    id: 14,
    img: 'img/โซดา/เขียวโซดา.jpg',
    name: 'เขียวโซดา',
    price: 30,
    description: '',
    type: 'soda'
},{
    id: 15,
    img: 'img/โซดา/แดงโซดา.jpg',
    name: 'แดงโซดา',
    price: 30,
    description: '',
    type: 'soda'
},{
    id: 16,
    img: 'img/โซดา/บลูเบอร์รี่โซดา.jpg',
    name: 'บลูเบอรรี่โซดา',
    price: 30,
    description: '',
    type: 'soda'
},{
    id: 17,
    img: 'img/โซดา/บลูฮาวาย.jpg',
    name: 'บลูฮาวาย',
    price: 30,
    description: '',
    type: 'soda'
},{
    id: 18,
    img: 'img/โซดา/ลิ้นจี่โซดา.jpg',
    name: 'ลิ้นจี่โซดา',
    price: 30,
    description: '',
    type: 'soda'
},{
    id: 19,
    img: 'img/โซดา/สตอเบอรี่โซดา.jpg',
    name: 'สตรอว์เบอร์รีโซดา',
    price: 30,
    description: '',
    type: 'soda'
},{
    id: 20,
    img: 'img/โซดา/แอปเปิลโซดา.jpg',
    name: 'แอปเปิลโซดา',
    price: 30,
    description: '',
    type: 'soda'
}];

// [{},{},{}] // length = 3

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${ numberWithCommas(product[i].price) } บาท</p>
                </div>`;
    }
    $("#productlist").html(html);

})

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function searchsomething(elem) {
    // console.log('#'+elem.id)
    var value = $('#'+elem.id).val()
    console.log(value)

    var html = '';
    for (let i = 0; i < product.length; i++) {
        if( product[i].name.includes(value) ) {
            html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${ numberWithCommas(product[i].price) } บาท</p>
                </div>`;
        }
    }
    if(html == '') {
        $("#productlist").html(`<p>ไม่เจอรายการที่ค้นหา</p>`);
    } else {
        $("#productlist").html(html);
    }

}

function searchproduct(param) {
    console.log(param)
    $(".product-items").css('display', 'none')
    if(param == 'all') {
        $(".product-items").css('display', 'block')
    }
    else {
        $("."+param).css('display', 'block')
    }
}

var productindex = 0;
function openProductDetail(index) {
    productindex = index;
    console.log(productindex)
    $("#modalDesc").css('display', 'flex')
    $("#mdd-img").attr('src', product[index].img);
    $("#mdd-name").text(product[index].name)
    $("#mdd-price").text( numberWithCommas(product[index].price) + ' บาท')
    $("#mdd-desc").text(product[index].description)
}

function closeModal() {
    $(".modal").css('display','none')
}

var cart = [];
function addtocart() {
    var pass = true;

    for (let i = 0; i < cart.length; i++) {
        if( productindex == cart[i].index ) {
            console.log('found same product')
            cart[i].count++;
            pass = false;
        }
    }

    if(pass) {
        var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1
        };
        // console.log(obj)
        cart.push(obj)
    }
    console.log(cart)

    Swal.fire({
        icon: 'success',
        title: 'เพิ่ม ' + product[productindex].name + ' ลงในรายการสั่งซื้อ'
    })
    $("#cartcount").css('display','flex').text(cart.length)
}

function openCart() {
    $('#modalCart').css('display','flex')
    rendercart();
}

function rendercart() {
    if(cart.length > 0) {
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html += `<div class="cartlist-items">
                        <div class="cartlist-left">
                            <img src="${cart[i].img}" alt="">
                            <div class="cartlist-detail">
                                <p style="font-size: 1.5vw;">${cart[i].name}</p>
                                <p style="font-size: 1.2vw;">${ numberWithCommas(cart[i].price * cart[i].count) } THB</p>
                            </div>
                        </div>
                        <div class="cartlist-right">
                            <p onclick="deinitems('-', ${i})" class="btnc">-</p>
                            <p id="countitems${i}" style="margin: 0 20px;">${cart[i].count}</p>
                            <p onclick="deinitems('+', ${i})" class="btnc">+</p>
                        </div>
                    </div>`;
        }
        $("#mycart").html(html)
    }
    else {
        $("#mycart").html(`<p>ไม่พบรายการที่สั่ง</p>`)
    }
}

function deinitems(action, index) {
    if(action == '-') {
        if(cart[index].count > 0) {
            cart[index].count--;
            $("#countitems"+index).text(cart[index].count)

            if(cart[index].count <= 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'คุณต้องการลบรายการนี้หรือไม่',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'ลบ',
                    cancelButtonText: 'ยกเลิก'
                }).then((res) => {
                  if(res.isConfirmed) {
                     cart.splice(index, 1) 
                     console.log(cart)
                     rendercart();
                     $("#cartcount").css('display','flex').text(cart.length)
                     
                     if(cart.length <= 0) {
                        $("#cartcount").css('display','none')
                     }
                  }  
                  else {
                    cart[index].count++;
                    $("#countitems"+index).text(cart[index].count)
                    rendercart();
                  }
                })
            }
            rendercart();
        }
        
    }
    else if(action == '+') {
        cart[index].count++;
        $("#countitems"+index).text(cart[index].count)
        rendercart();
    }
}