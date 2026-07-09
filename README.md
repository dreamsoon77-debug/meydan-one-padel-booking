[index.html](https://github.com/user-attachments/files/29844396/index.html)
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Meydan One Padel Booking</title>
<style>
:root{--navy:#071e42;--navy2:#12396f;--blue:#0b4ea2;--teal:#008a84;--bg:#f3f6fa;--card:#fff;--text:#1f2937;--muted:#64748b;--green:#16a34a;--red:#dc2626;--amber:#d97706;--line:#e2e8f0}
*{box-sizing:border-box}body{margin:0;background:var(--bg);font-family:Arial,Helvetica,sans-serif;color:var(--text)}
.app{max-width:560px;margin:0 auto;min-height:100vh;background:linear-gradient(180deg,#f8fafc,#edf3f8)}
.hero{background:linear-gradient(135deg,var(--navy),var(--navy2));color:#fff;padding:30px 22px 38px;border-radius:0 0 32px 32px;box-shadow:0 14px 34px rgba(8,31,69,.22)}
.hero.small{padding-bottom:28px}.brand{font-size:12px;letter-spacing:.18em;text-transform:uppercase;opacity:.85}
h1{font-size:31px;line-height:1.08;margin:10px 0 8px;font-weight:900}h2{font-size:21px;margin:0 0 12px}.hero p{opacity:.84;line-height:1.45;margin:0}
.card{background:var(--card);margin:18px;padding:20px;border-radius:24px;box-shadow:0 12px 32px rgba(15,23,42,.08);border:1px solid rgba(226,232,240,.9)}
.muted{color:var(--muted);line-height:1.45}.center{text-align:center}.connected{background:#ecfeff;border:1px solid #99f6e4;color:#134e4a;padding:12px;border-radius:16px;margin:12px 0;font-size:13px;font-weight:700}
.warning{background:#fffbeb;border:1px solid #fde68a;color:#92400e;padding:12px;border-radius:16px;margin-top:12px;font-size:13px;line-height:1.45}
.btn{width:100%;border:0;padding:15px 18px;border-radius:16px;font-weight:800;font-size:16px;cursor:pointer;margin-top:12px}.btn.primary{background:var(--teal);color:#fff}.btn.soft{background:#eef6ff;color:var(--blue)}.btn.danger{background:var(--red);color:#fff}.btn.gray{background:#475569;color:white}
.mini{border:1px solid var(--line);background:#fff;color:var(--blue);font-weight:800;padding:8px 12px;border-radius:12px}.screen{display:none}.screen.active{display:block}
.rule{display:flex;gap:10px;align-items:center;padding:13px 0;border-bottom:1px solid var(--line)}.rule:last-child{border-bottom:0}.rule b{color:var(--green)}
.section-title{display:flex;align-items:center;justify-content:space-between}.mt{margin-top:16px}.date-strip{display:flex;gap:8px;overflow-x:auto;padding:2px 0 10px}
.date-chip{min-width:112px;background:#fff;border:1px solid var(--line);border-radius:16px;padding:11px;text-align:center;font-weight:900;cursor:pointer}.date-chip.active{background:var(--navy);color:#fff;border-color:var(--navy)}.date-chip span{display:block;font-size:12px;opacity:.75;margin-top:3px}
.slot-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.slot{border:1px solid var(--line);border-radius:16px;padding:13px;text-align:center;background:#fff;cursor:pointer;font-weight:900;min-height:68px}.slot span{display:block;font-size:12px;color:var(--muted);font-weight:700;margin-bottom:5px}.slot.selected{background:var(--teal);color:#fff}.slot.selected span{color:#d8fffb}.slot.booked{opacity:.45;text-decoration:line-through;cursor:not-allowed;background:#f8fafc}
.badge{display:inline-block;border-radius:999px;padding:7px 10px;font-weight:800;font-size:12px;margin:5px 5px 5px 0}.badge.green{background:#dcfce7;color:#166534}.badge.red{background:#fee2e2;color:#991b1b}.badge.blue{background:#dbeafe;color:#1e40af}.badge.amber{background:#fef3c7;color:#92400e}
label{display:block;font-weight:800;font-size:13px;margin:12px 0 7px}input{width:100%;padding:13px;border:1px solid var(--line);border-radius:14px;font-size:16px;background:#fff}.checkbox{display:flex;gap:10px;align-items:flex-start;line-height:1.35}.checkbox input{width:auto;margin-top:2px}
.error{display:none;color:var(--red);font-weight:800;margin-top:10px;font-size:13px}.success-icon{width:100px;height:100px;border-radius:50%;background:#dcfce7;margin:0 auto 18px;color:var(--green);font-size:56px;font-weight:900;line-height:100px}
.kpis{display:grid;grid-template-columns:1fr 1fr;gap:10px}.kpis div{background:#f8fafc;border:1px solid var(--line);border-radius:16px;padding:14px}.kpis span{font-size:12px;color:var(--muted)}.kpis b{font-size:24px;color:var(--navy);display:block;margin-top:4px}
.table-wrap{overflow-x:auto}.table{width:100%;border-collapse:collapse;font-size:12px}.table th,.table td{border-bottom:1px solid var(--line);padding:9px;text-align:left;vertical-align:top}.table th{background:#f8fafc;color:#334155}.booking-card{border:1px solid var(--line);border-radius:18px;padding:13px;margin:10px 0;background:#fff}
.loading{position:fixed;inset:0;background:rgba(248,250,252,.82);display:none;align-items:center;justify-content:center;z-index:99}.loader{background:#fff;border-radius:18px;padding:18px 24px;box-shadow:0 12px 30px rgba(0,0,0,.12);font-weight:900;color:var(--navy)}footer{padding:20px;text-align:center;color:var(--muted);font-size:12px}
.userbar{background:#f8fafc;border:1px solid var(--line);border-radius:16px;padding:12px;margin-top:12px;font-size:13px}.tabs{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px}.tab{padding:12px;border-radius:14px;border:1px solid var(--line);background:white;font-weight:900;color:var(--blue)}.tab.active{background:var(--navy);color:white}
</style>
</head>
<body>
<div id="loading" class="loading"><div class="loader">Loading...</div></div>
<main class="app">
<section id="home" class="screen active">
  <div class="hero"><div class="brand">Dubai Holding Community Management</div><h1>Meydan One<br/>Padel Booking</h1><p>Live court booking for registered residents.</p></div>
  <div class="card">
    <h2>Book your court</h2>
    <p class="muted">Residents must register or log in before booking. Confirmed bookings are updated live for all users.</p>
    <div class="connected">● Login enabled • Live booking database</div>
    <div id="userBar" class="userbar"></div>
    <button class="btn primary" onclick="App.startBooking()">Start Booking</button>
    <button class="btn soft" onclick="App.go('lookup')">Find / Cancel Booking</button>
    <button class="btn soft" onclick="App.go('auth')">Register / Login</button>
    <button class="btn soft" onclick="App.go('adminLogin')">Admin Dashboard</button>
  </div>
  <div class="card"><h2>Rules</h2><div class="rule"><b>✓</b><span>Registered residents only</span></div><div class="rule"><b>✓</b><span>Maximum 2 bookings per unit per week</span></div><div class="rule"><b>✓</b><span>Booking opens for today + next 3 days only</span></div><div class="rule"><b>✓</b><span>60 minutes per booking</span></div><div class="rule"><b>✓</b><span>Operating hours: 09:00 AM to 10:00 PM</span></div></div>
</section>

<section id="auth" class="screen">
  <div class="hero small"><div class="brand">Resident Access</div><h1>Register / Login</h1><p>Create an account once, then log in to book.</p></div>
  <div class="card">
    <div class="tabs"><button id="loginTab" class="tab active" onclick="App.setAuthMode('login')">Login</button><button id="registerTab" class="tab" onclick="App.setAuthMode('register')">Register</button></div>
    <div id="registerFields" style="display:none">
      <label>Full Name</label><input id="regName" placeholder="Enter full name"/>
      <label>Unit Number</label><input id="regUnit" placeholder="Example: R20-1204"/>
      <label>Mobile Number</label><input id="regMobile" placeholder="+971"/>
    </div>
    <label>Email Address</label><input id="authEmail" type="email" placeholder="name@email.com"/>
    <label>Password</label><input id="authPassword" type="password" placeholder="Minimum 6 characters"/>
    <div id="authError" class="error">Unable to complete request.</div>
    <button id="authButton" class="btn primary" onclick="App.submitAuth()">Login</button>
    <button class="btn soft" onclick="App.go('home')">Back</button>
  </div>
</section>

<section id="booking" class="screen"><div class="hero small"><div class="brand">Step 1</div><h1>Select Slot</h1><p>Choose a live available slot.</p></div><div class="card"><div class="section-title"><h2>Date</h2><button class="mini" onclick="App.refresh()">Refresh</button></div><div id="dateStrip" class="date-strip"></div><h2 class="mt">Court & Time</h2><div id="slotGrid" class="slot-grid"></div><div id="slotError" class="error">Please select an available slot.</div><button class="btn primary" onclick="App.continueBooking()">Continue</button><button class="btn soft" onclick="App.go('home')">Back</button></div></section>

<section id="resident" class="screen"><div class="hero small"><div class="brand">Step 2</div><h1>Confirm Details</h1><p>Your account details will be used for this booking.</p></div><div class="card"><div id="selectedSlotBadge"></div><div id="profileSummary" class="userbar"></div><label>Emirates ID Number</label><input id="emiratesId" placeholder="784-XXXX-XXXXXXX-X"/><label class="checkbox"><input id="agree" type="checkbox"/><span>I confirm that I am a Meydan One resident and accept the booking rules.</span></label><div id="formError" class="error">Please enter Emirates ID and accept the declaration.</div><div id="limitError" class="error">This unit has already reached the weekly limit of 2 confirmed bookings.</div><div id="saveError" class="error">Unable to save booking. Please try again.</div><button class="btn primary" onclick="App.confirmBooking()">Confirm Booking</button><button class="btn soft" onclick="App.go('booking')">Back</button></div></section>

<section id="success" class="screen"><div class="hero small"><div class="brand">Confirmed</div><h1>Booking Created</h1><p>Please keep your Booking ID.</p></div><div class="card center"><div class="success-icon">✓</div><h2>Your booking is confirmed</h2><p id="confirmationText" class="muted"></p><button class="btn primary" onclick="App.downloadCalendar()">Add to Calendar</button><button class="btn soft" onclick="App.go('home')">Home</button></div></section>

<section id="lookup" class="screen"><div class="hero small"><div class="brand">Resident</div><h1>Find Booking</h1><p>Search by Booking ID or Unit Number.</p></div><div class="card"><label>Booking ID or Unit Number</label><input id="searchInput" placeholder="MOP-2026... or R20-1204"/><button class="btn primary" onclick="App.searchBookings()">Search</button><div id="lookupResults"></div><button class="btn soft" onclick="App.go('home')">Back</button></div></section>

<section id="adminLogin" class="screen"><div class="hero small"><div class="brand">Admin</div><h1>Secure Access</h1><p>Community Management use only.</p></div><div class="card"><label>Admin Key</label><input id="adminKey" type="password" placeholder="Enter admin key"/><div id="adminError" class="error">Incorrect admin key.</div><button class="btn primary" onclick="App.adminLogin()">Open Dashboard</button><button class="btn soft" onclick="App.go('home')">Back</button><div class="warning">Temporary key: <b>MeydanOne@2026</b>. Change before official use.</div></div></section>

<section id="admin" class="screen"><div class="hero small"><div class="brand">Admin</div><h1>Dashboard</h1><p>Live booking register.</p></div><div class="card"><div class="kpis"><div><span>Confirmed</span><b id="kpiConfirmed">0</b></div><div><span>Cancelled</span><b id="kpiCancelled">0</b></div><div><span>Court 1</span><b id="kpiCourt1">0</b></div><div><span>Court 2</span><b id="kpiCourt2">0</b></div></div><button class="btn primary" onclick="App.exportCSV()">Export CSV</button><button class="btn soft" onclick="App.refreshAdmin()">Refresh</button></div><div class="card"><h2>Booking Register</h2><div id="adminTable"></div><button class="btn soft" onclick="App.go('home')">Back</button></div></section>
<footer>Version 5.2 Login + Email Notification • Meydan One Padel Booking System</footer>
</main>
<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, updateDoc, doc, serverTimestamp, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig={apiKey:"AIzaSyA1lt7J5NT0ln1ukX3lOT3Ny8kUKamnTNM",authDomain:"meydan-one-padel.firebaseapp.com",projectId:"meydan-one-padel",storageBucket:"meydan-one-padel.firebasestorage.app",messagingSenderId:"185588676632",appId:"1:185588676632:web:1beb62f317337278adab6d",measurementId:"G-G2Q5HM4LZH"};
const fbApp=initializeApp(firebaseConfig), db=getFirestore(fbApp), auth=getAuth(fbApp), ADMIN_KEY="MeydanOne@2026", NOTIFICATION_WEBHOOK="https://script.google.com/macros/s/AKfycbyDJEyE6bjKForAWOnw3P5JsNCpBomlWPIg1XyTBN2JMS4v48C1f96YKBj0p0yBRKnvZw/exec";
const TIMES=["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"];
let bookings=[],selectedDate=null,selectedSlot=null,lastBooking=null,adminUnlocked=false,authMode="login",currentUser=null,currentProfile=null;
const $=id=>document.getElementById(id), show=id=>document.querySelectorAll(".screen").forEach(s=>s.id===id?s.classList.add("active"):s.classList.remove("active")), loading=v=>$("loading").style.display=v?"flex":"none";
const pad=n=>String(n).padStart(2,"0"), dateStr=d=>d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate()), niceDate=s=>new Date(s+"T00:00:00").toLocaleDateString("en-GB",{weekday:"short",day:"2-digit",month:"short"}), addHour=t=>pad(Number(t.slice(0,2))+1)+":00";
const weekKey=s=>{const d=new Date(s+"T00:00:00"), onejan=new Date(d.getFullYear(),0,1); return d.getFullYear()+"-W"+Math.ceil(((((d-onejan)/86400000)+onejan.getDay()+1)/7));};
const bookingId=()=>"MOP-"+new Date().getFullYear()+"-"+Math.floor(100000+Math.random()*900000);
async function loadBookings(){loading(true);try{const snap=await getDocs(collection(db,"bookings"));bookings=snap.docs.map(d=>({docId:d.id,...d.data()}));}catch(e){console.error(e);alert("Unable to load bookings. Please check Firebase rules.");}finally{loading(false);}}
async function loadProfile(uid){const ref=doc(db,"users",uid);const snap=await getDoc(ref);return snap.exists()?snap.data():null;}
function renderUserBar(){const box=$("userBar"); if(currentUser&&currentProfile){box.innerHTML=`Logged in as <b>${currentProfile.name}</b><br>${currentProfile.unit} • ${currentUser.email}<button class="btn gray" onclick="App.logout()">Logout</button>`;}else{box.innerHTML=`Not logged in. Please register or login before booking.`;}}
function isBooked(court,time,date){return bookings.some(b=>b.status==="Confirmed"&&b.court===court&&b.time===time&&b.date===date);}
function renderDates(){const box=$("dateStrip");box.innerHTML="";if(!selectedDate)selectedDate=dateStr(new Date());for(let i=0;i<4;i++){const d=new Date();d.setDate(d.getDate()+i);const ds=dateStr(d);const el=document.createElement("div");el.className="date-chip"+(ds===selectedDate?" active":"");el.innerHTML=`${i===0?"Today":niceDate(ds)}<span>${ds}</span>`;el.onclick=()=>{selectedDate=ds;selectedSlot=null;renderDates();renderSlots();};box.appendChild(el);}renderSlots();}
function renderSlots(){const grid=$("slotGrid");grid.innerHTML="";TIMES.forEach(time=>["Court 1","Court 2"].forEach(court=>{const booked=isBooked(court,time,selectedDate);const el=document.createElement("div");el.className="slot "+(booked?"booked":"")+(selectedSlot&&selectedSlot.court===court&&selectedSlot.time===time?" selected":"");el.innerHTML=`<span>${court}</span>${time} - ${addHour(time)}`;if(!booked)el.onclick=()=>{selectedSlot={court,time,date:selectedDate};renderSlots();};grid.appendChild(el);}));}
async function slotBookedLive(court,time,date){const q=query(collection(db,"bookings"),where("court","==",court),where("time","==",time),where("date","==",date),where("status","==","Confirmed"));const snap=await getDocs(q);return !snap.empty;}
function weeklyCount(unit,date){const wk=weekKey(date);return bookings.filter(b=>b.status==="Confirmed"&&String(b.unit).toLowerCase()===unit.toLowerCase()&&weekKey(b.date)===wk).length;}
async function cancelBooking(docId,confirmIt=true){if(confirmIt&&!confirm("Cancel this booking?"))return;loading(true);try{await updateDoc(doc(db,"bookings",docId),{status:"Cancelled",cancelledAt:new Date().toISOString(),cancelledBy:currentUser?currentUser.uid:"unknown"});await loadBookings();renderSlots();if(adminUnlocked)renderAdmin();}catch(e){console.error(e);alert("Unable to cancel booking.");}finally{loading(false);}}

async function notifyNewBooking(data){
  try{
    await fetch(NOTIFICATION_WEBHOOK, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookingId: data.id,
        name: data.name,
        unit: data.unit,
        mobile: data.mobile,
        email: data.email,
        court: data.court,
        date: data.date,
        time: data.time,
        end: data.end
      })
    });
  } catch(e) {
    console.warn("Email notification failed, but booking was saved.", e);
  }
}

function renderAdmin(){const confirmed=bookings.filter(b=>b.status==="Confirmed");$("kpiConfirmed").textContent=confirmed.length;$("kpiCancelled").textContent=bookings.filter(b=>b.status==="Cancelled").length;$("kpiCourt1").textContent=confirmed.filter(b=>b.court==="Court 1").length;$("kpiCourt2").textContent=confirmed.filter(b=>b.court==="Court 2").length;const sorted=bookings.slice().sort((a,b)=>String(b.created).localeCompare(String(a.created)));if(!sorted.length){$("adminTable").innerHTML='<p class="muted">No bookings yet.</p>';return;}$("adminTable").innerHTML='<div class="table-wrap"><table class="table"><tr><th>ID</th><th>Resident</th><th>Slot</th><th>Status</th><th>Action</th></tr>'+sorted.map(b=>`<tr><td>${b.id||""}</td><td><b>${b.name||""}</b><br>${b.unit||""}<br>${b.mobile||""}<br>${b.email||""}</td><td>${b.court||""}<br>${b.date||""}<br>${b.time||""}-${b.end||""}</td><td><span class="badge ${b.status==="Confirmed"?"green":"red"}">${b.status||""}</span></td><td>${b.status==="Confirmed"?`<button class="btn danger" style="padding:8px;margin:0;border-radius:10px;font-size:12px" onclick="App.cancelByAdmin('${b.docId}')">Cancel</button>`:""}</td></tr>`).join("")+'</table></div>';}
onAuthStateChanged(auth, async user=>{currentUser=user; currentProfile=user?await loadProfile(user.uid):null; renderUserBar();});
window.App={async go(id){show(id);if(id==="booking"){await loadBookings();renderDates();}if(id==="admin"&&adminUnlocked){await loadBookings();renderAdmin();}},startBooking(){if(!currentUser||!currentProfile){alert("Please register or login before booking.");App.go("auth");return;}App.go("booking");},setAuthMode(mode){authMode=mode;$("loginTab").classList.toggle("active",mode==="login");$("registerTab").classList.toggle("active",mode==="register");$("registerFields").style.display=mode==="register"?"block":"none";$("authButton").textContent=mode==="login"?"Login":"Create Account";$("authError").style.display="none";},async submitAuth(){ $("authError").style.display="none";const email=$("authEmail").value.trim(),pass=$("authPassword").value.trim(); if(!email.includes("@")||pass.length<6){$("authError").style.display="block";return;}loading(true);try{if(authMode==="register"){const name=$("regName").value.trim(),unit=$("regUnit").value.trim(),mobile=$("regMobile").value.trim(); if(!name||!unit||!mobile){$("authError").style.display="block";return;}const cred=await createUserWithEmailAndPassword(auth,email,pass);await setDoc(doc(db,"users",cred.user.uid),{name,unit,mobile,email,status:"Active",created:new Date().toISOString(),createdServer:serverTimestamp()});currentUser=cred.user;currentProfile=await loadProfile(cred.user.uid);}else{const cred=await signInWithEmailAndPassword(auth,email,pass);currentUser=cred.user;currentProfile=await loadProfile(cred.user.uid);}renderUserBar();show("home");}catch(e){console.error(e);$("authError").textContent=e.message;$("authError").style.display="block";}finally{loading(false);}},async logout(){await signOut(auth);currentUser=null;currentProfile=null;renderUserBar();show("home");},async refresh(){await loadBookings();renderSlots();},continueBooking(){ $("slotError").style.display="none"; if(!selectedSlot){$("slotError").style.display="block";return;}$("selectedSlotBadge").innerHTML=`<span class="badge blue">${selectedSlot.court}</span><span class="badge green">${selectedSlot.date}</span><span class="badge amber">${selectedSlot.time} - ${addHour(selectedSlot.time)}</span>`;$("profileSummary").innerHTML=`<b>${currentProfile.name}</b><br>${currentProfile.unit} • ${currentUser.email}<br>${currentProfile.mobile}`;show("resident");},async confirmBooking(){["formError","limitError","saveError"].forEach(id=>$(id).style.display="none");if(!currentUser||!currentProfile){alert("Please login first.");show("auth");return;}const eid=$("emiratesId").value.trim(),agree=$("agree").checked;if(!eid||!agree){$("formError").style.display="block";return;}await loadBookings();if(weeklyCount(currentProfile.unit,selectedSlot.date)>=2){$("limitError").style.display="block";return;}loading(true);try{if(await slotBookedLive(selectedSlot.court,selectedSlot.time,selectedSlot.date)){alert("This slot has just been booked. Please choose another slot.");await loadBookings();renderSlots();show("booking");return;}const id=bookingId();const data={id,userId:currentUser.uid,name:currentProfile.name,unit:currentProfile.unit,eid,mobile:currentProfile.mobile,email:currentUser.email,court:selectedSlot.court,date:selectedSlot.date,time:selectedSlot.time,end:addHour(selectedSlot.time),status:"Confirmed",created:new Date().toISOString(),createdServer:serverTimestamp()};const ref=await addDoc(collection(db,"bookings"),data);lastBooking={docId:ref.id,...data};await notifyNewBooking(data);await loadBookings();$("confirmationText").innerHTML=`<b>Booking ID:</b> ${id}<br><b>Court:</b> ${data.court}<br><b>Date:</b> ${data.date}<br><b>Time:</b> ${data.time} - ${data.end}`;renderSlots();show("success");}catch(e){console.error(e);$("saveError").style.display="block";}finally{loading(false);}},async searchBookings(){const q=$("searchInput").value.trim().toLowerCase(),results=$("lookupResults");results.innerHTML="";if(!q){results.innerHTML='<p class="muted">Please enter Booking ID or Unit Number.</p>';return;}await loadBookings();const matches=bookings.filter(b=>String(b.id).toLowerCase()===q||String(b.unit).toLowerCase()===q);if(!matches.length){results.innerHTML='<p class="muted">No booking found.</p>';return;}matches.sort((a,b)=>String(b.created).localeCompare(String(a.created))).forEach(b=>{const box=document.createElement("div");box.className="booking-card";box.innerHTML=`<b>${b.id}</b><br>${b.name} • ${b.unit}<br>${b.court} • ${b.date} • ${b.time}-${b.end}<br><span class="badge ${b.status==="Confirmed"?"green":"red"}">${b.status}</span>`;if(b.status==="Confirmed"){const btn=document.createElement("button");btn.className="btn danger";btn.textContent="Cancel Booking";btn.onclick=async()=>{await cancelBooking(b.docId);await App.searchBookings();};box.appendChild(btn);}results.appendChild(box);});},async adminLogin(){ $("adminError").style.display="none"; if($("adminKey").value!==ADMIN_KEY){$("adminError").style.display="block";return;}adminUnlocked=true;await App.go("admin");},async refreshAdmin(){await loadBookings();renderAdmin();},cancelByAdmin:async docId=>{await cancelBooking(docId);},exportCSV(){const headers=["BookingID","Created","Name","Unit","EmiratesID","Mobile","Email","Court","Date","Start","End","Status","UserID"];const rows=bookings.map(b=>[b.id,b.created,b.name,b.unit,b.eid,b.mobile,b.email,b.court,b.date,b.time,b.end,b.status,b.userId]);const csv=[headers,...rows].map(r=>r.map(v=>`"${String(v??"").replaceAll('"','""')}"`).join(",")).join("\n");const blob=new Blob([csv],{type:"text/csv"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="Meydan_One_Padel_Bookings.csv";a.click();},downloadCalendar(){if(!lastBooking)return;const dt=lastBooking.date.replaceAll("-","")+"T"+lastBooking.time.replace(":","")+"00",de=lastBooking.date.replaceAll("-","")+"T"+lastBooking.end.replace(":","")+"00";const ics=`BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:Meydan One Padel Booking - ${lastBooking.court}\nDTSTART:${dt}\nDTEND:${de}\nDESCRIPTION:Booking ID ${lastBooking.id}\nEND:VEVENT\nEND:VCALENDAR`;const blob=new Blob([ics],{type:"text/calendar"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=lastBooking.id+".ics";a.click();}};
await loadBookings();renderDates();renderUserBar();
</script>
</body>
</html>
