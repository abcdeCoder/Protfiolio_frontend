export const openProfileTab = (gh, li, lc, cc, hr, onObject) => {
  if (onObject.object.uuid === gh.current.uuid)
    window.open("https://github.com/abcdeCoder", "new");
  if (onObject.object.uuid === li.current.uuid)
    window.open("https://www.linkedin.com/in/gaurav-verma-88056a224/", "new");
  if (onObject.object.uuid === lc.current.uuid)
    window.open("https://leetcode.com/abcdeCoder/", "new");
  if (onObject.object.uuid === cc.current.uuid)
    window.open("https://www.codechef.com/users/gaurav26012002", "new");
  if (onObject.object.uuid === hr.current.uuid)
    window.open("https://www.hackerrank.com/gaurav_021164031?hr_r=1", "new");
};

export const openProjectTab = (sf, iic, chat, museum, ttt, onObject) => {
  if (onObject.object.uuid === sf.current.uuid)
    window.open("http://gvprojects.ml:3000/", "new");
  if (onObject.object.uuid === iic.current.uuid)
    window.open("https://gvfoodwahalla.herokuapp.com/", "new");
  if (onObject.object.uuid === chat.current.uuid)
    window.open("https://github.com/abcdeCoder/G-chatting_frontend/blob/main/Screenshot_2022-09-18-14-49-19-868_com.chatbes.jpg", "new");
  if (onObject.object.uuid === museum.current.uuid)
    window.open("https://adorable-cat-3523f7.netlify.app/", "new");
  if (onObject.object.uuid === ttt.current.uuid)
    window.open("https://game-6c092.web.app", "new");
};

export const openProjectGithub = (sf, iic, chat, museum, ttt, onObject) => {
  if (onObject.object.uuid === sf.current.uuid)
    window.open("https://github.com/abcdeCoder/Smart_Exam_backend", "new");
  if (onObject.object.uuid === iic.current.uuid)
    window.open("https://github.com/abcdeCoder/Gv_foodwala", "new");
  if (onObject.object.uuid === chat.current.uuid)
    window.open("https://github.com/abcdeCoder/G-chatting_frontend", "new");
  if (onObject.object.uuid === museum.current.uuid)
    window.open("https://github.com/abcdeCoder/Quick_connect", "new");
  if (onObject.object.uuid === ttt.current.uuid)
    window.open(
      "https://github.com/abcdeCoder/Crossgame",
      "new"
    );
};
