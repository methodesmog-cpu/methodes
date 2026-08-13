
const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));

document.querySelectorAll('form').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const msg=document.querySelector('#form-message');
    if(msg){msg.textContent="Merci ! Votre demande a bien été préparée. Nous vous contacterons rapidement."; msg.style.color="#c9a45c";}
    form.reset();
  });
});
