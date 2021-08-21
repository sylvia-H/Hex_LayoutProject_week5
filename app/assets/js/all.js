$(function() {
  // 左側 assignmentList 數量
  let assignmentListChild = document.getElementById('assignmentList').getElementsByTagName('a');
  let assignmentListChildNum = assignmentListChild.length;
  document.getElementById('assignmentListChild').innerText = assignmentListChildNum;

  // 右側 assignmentComment 數量
  let assignmentCommentNum = document.getElementById('assignmentComment').getElementsByTagName('li').length;
  document.getElementById('assignmentCommentNum').innerHTML = assignmentCommentNum + '&nbsp;';

  // 下方分頁導覽列按鈕計數
  let assignNow = 0;
  let pre = document.querySelectorAll('.page-item')[0];
  let next = document.querySelectorAll('.page-item')[1];
  if(assignNow == 0){
    pre.classList.add("disabled");
  }else {
    pre.classList.remove("disabled");
  }
  pre.addEventListener('click', function() {
    if(assignNow <= 0){
      assignNow = 0;
      assignmentListChild[assignNow].classList.add("active");
      pre.classList.add("disabled");
      console.log(assignNow);
    }else {
      assignNow -= 1;
      assignmentListChild[assignNow+1].classList.remove("active");
      assignmentListChild[assignNow].classList.add("active");
      pre.classList.remove("disabled");
      next.classList.remove("disabled");
      console.log(assignNow);
    }
  });
  next.addEventListener('click', function() {
    if(assignNow >= assignmentListChildNum - 1){
      assignNow = assignmentListChildNum - 1;
      assignmentListChild[assignNow].classList.add("active");
      next.classList.add("disabled");
      console.log(assignNow);
    }else {
      assignNow += 1;
      assignmentListChild[assignNow-1].classList.remove("active");
      assignmentListChild[assignNow].classList.add("active");
      pre.classList.remove("disabled");
      next.classList.remove("disabled");
      console.log(assignNow);
    }
  });


  // editor
  ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .then( editor => {
    console.log( editor );
  } )
    .catch( error => {
    console.error( error );
  } );

});