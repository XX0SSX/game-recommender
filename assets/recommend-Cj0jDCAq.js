import{r as e}from"./main-O0hApang.js";document.getElementById(`find-btn`).addEventListener(`click`,()=>{let t=document.getElementById(`isMulti`).checked,n=document.getElementById(`isFree`).checked,r=document.getElementById(`isRpg`).checked,i=document.getElementById(`result`);i.innerHTML=``;let a=e.filter(e=>{let i=e.tags.includes(`Multiplayer`),a=e.price===0,o=e.tags.includes(`RPG`),s=!0;return t&&!i&&(s=!1),n&&!a&&(s=!1),r&&!o&&(s=!1),s});a.length>0?a.forEach(e=>{i.innerHTML+=`
                        <div class="card recommend-card">
                            <img src="${e.img}" alt="${e.name}">
                            <h3>${e.name}</h3>
                            <p>ราคา: ${e.price} บาท</p>
                            <span style="color: red; font-weight: 900" class="badge">เกมนี้เหมาะกับคุณ</span>
                        </div>
                    `}):i.innerHTML=`<p>ไม่พบเกมที่ตรงกับเงื่อนไขดังกล่าว</p>`});