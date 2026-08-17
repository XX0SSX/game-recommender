import{i as e,n as t}from"./main-O0hApang.js";var n=document.getElementById(`cart-items`),r=document.getElementById(`summary`);function i(){let t=e();if(t.length===0){n.innerHTML=`<p>ยังไม่มีสินค้าในตะกร้า</p>`,r.innerHTML=``;return}let i=`<ul>`,a=0;t.forEach(e=>{i+=`<li>${e.name} - ${e.price} บาท</li>`,a+=e.price}),i+=`</ul>`,n.innerHTML=i;let o=t.length,s=0,c=``;o>=3&&a>=2e3?(s=a*.2,c=`สุดคุ้ม! รับส่วนลด 20% (ซื้อครบ 3 เกม และยอดเกิน 2,000 บาท)`):a>=1e3?(s=a*.1,c=`ลดเบาๆ 10% (ยอดเกิน 1,000 บาท)`):(s=0,c=`ซื้อเพิ่มอีกนิดเพื่อให้ถึงยอดจัดโปรโมชันนะ!`);let l=a-s;r.innerHTML=`
                <hr style="margin: 20px 0;">
                <p>ราคารวม: <strong>${a} บาท</strong></p>
                <p>จำนวนเกม: <strong>${o} เกม</strong></p>
                <p style="color:red;">ส่วนลด: <strong>-${s} บาท</strong></p>
                <p><em>${c}</em></p>
                <h2>ยอดชำระสุทธิ: ${l} บาท</h2>
            `}document.getElementById(`clear-btn`).addEventListener(`click`,()=>{t(),i()}),i();