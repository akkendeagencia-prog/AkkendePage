<script>
document.querySelectorAll('.portfolio-buttons .cta').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const target = btn.dataset.target;

    document.querySelectorAll('.toggle-section').forEach(s=>s.classList.remove('show'));
    document.querySelectorAll('.cta').forEach(b=>b.classList.remove('cta--active'));

    document.getElementById(target).classList.add('show');
    btn.classList.add('cta--active');
  });
});
</script>
