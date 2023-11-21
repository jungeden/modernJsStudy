const readline = require("readline");

// readline 인터페이스 객체 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// todoList 배열 생성
let todoList = [
  {
    id: 1,
    name: "자바스크립트 공부하기",
    status: "todo",
  },
  {
    id: 2,
    name: "내일 학교가기",
    status: "doing",
  },
  {
    id: 3,
    name: "롤",
    status: "done",
  },
];

const statusList = ["todo", "doing", "done"];

// CLI Todo 시작 함수
function init() {
  inputCommand();
}

// 커맨드 입력 : show(리스트 보기), add(리스트에 추가), delete(리스트에서 제거), update(리스트에서 변경)
function inputCommand() {
  rl.question("명령하세요 : ", (command) => {
    //let command_ = command.split(",");
    readCommand(command);
  });
}

function readCommand(command) {
  switch (command) {
    case "show":
      showTodo();
      break;
    case "add":
      addTodo();
      break;
    case "delete":
      deleteTodo();
      break;
    case "update":
      updateTodo();
      break;
    case "exit":
      console.log("프로그램을 종료합니다.");
      rl.close();
      break;
    // case "show,all" || "show,todo" || "show,done":
    //   let show_command = command.split(",");
    //   show_();
    //   break;
    case "show,all":
      show_all();
      break;
    case "show,todo":
      show_todo();
      break;
    case "show,done":
      show_done();
      break;
    case "show,doing":
      show_doing();
      break;
    default:
      rl.close();
      throw new Error("올바르지 않은 명령어입니다.");
  }
}

// showTodo 함수 구현
function showTodo() {
  //todoList를 순차적으로 돌면서, 출력
  todoList.forEach((todo) => {
    console.log(`- ${todo.name}(${todo.id})<${todo.status}>`);
  });

  // 줄 바꿈
  console.log();
  inputCommand();

  // switch (command_[1]) {
  //   case "": {
  //     // todoList를 순차적으로 돌면서, 출력
  //     todoList.forEach((todo) => {
  //       console.log(`- ${todo.name}(${todo.id})<${todo.status}>`);
  //     });

  //     // 줄 바꿈
  //     console.log();
  //     inputCommand();
  //   }

  //   case "all": {
  //     todoList.forEach((todo) => {
  //       console.log(`- ${todo.name}(${todo.id})<${todo.status}>`);
  //     });

  //     // 줄 바꿈
  //     console.log();
  //     inputCommand();
  //   }

  //   case "todo":
  // }
}
function show_all() {
  todoList.forEach((todo) => {
    console.log(`- ${todo.name}(${todo.id})`);
  });

  // 줄 바꿈
  console.log();
  inputCommand();
}

function show_todo() {
  todoList.forEach((todo) => {
    if (todo.status == "todo") {
      console.log(`- ${todo.name}(${todo.id})`);
    }
  });

  console.log();
  inputCommand();
}

function show_done() {
  todoList.forEach((todo) => {
    if (todo.status == "done") {
      console.log(`- ${todo.name}(${todo.id})`);
    }
  });

  console.log();
  inputCommand();
}

function show_doing() {
  todoList.forEach((todo) => {
    if (todo.status == "doing") {
      console.log(`- ${todo.name}(${todo.id})`);
    }
  });

  console.log();
  inputCommand();
}

// function show_() {
//   switch (show_command[1]) {
//     case "all":
//       break;
//     case "todo":
//       break;
//     case "done":
//       break;
//   }
// }

// addTodo 함수 구현
function addTodo() {
  rl.question("추가할 todo를 입력하세요 : ", (name) => {
    // 순차적으로 id값 부여하기,
    let name_ = name.split("@");

    let len = name_.length;
    // todoList에 name을 가진 새로운 todo 생성
    if (name == "") Error("공백을 입력할 수 없습니다.");
    else {
      for (let i = 0; i < len; i++) {
        todoList.forEach((todo) => {
          if (todo.id == null) {
            Id = todo.id;
          } else {
            const nextId = todoList[todoList.length - 1].id + 1;
            Id = nextId;
          }
        });

        const newTodo = {
          id: Id,
          name: name_[i],
          status: "todo",
        };

        todoList.push(newTodo);
        console.log(`${name_[i]}-${Id}(이)가 리스트에 추가되었습니다.\n`);
      }

      inputCommand();
    }
  });
}

// deleteTodo 함수 구현
function deleteTodo() {
  rl.question("삭제할 todo의 id를 입력하세요 : ", (id) => {
    let matchedTodo;

    if (id === "all") {
      //다 삭제
      todoList = todoList.filter((Number) => Number % 1 === 0);

      console.log("리스트 내 모든 항목이 삭제되었습니다.\n");
      inputCommand();
    } else {
      // filter 함수로 id에 매칭되지 않는 todo만 반환, 즉 id가 동일한 todo는 반환되지 않는다.
      // id가 같은 todo는 matchedTodo에 저장한다.
      todoList = todoList.filter((todo) => {
        if (todo.id === Number(id)) matchedTodo = todo;
        else return todo;
      });
      // 존재하지 않는 id 예외 처리
      if (matchedTodo === undefined) throw new Error("존재하지 않는 id입니다.");

      console.log(`${matchedTodo.name}(${id})가 리스트에서 삭제되었습니다.\n`);
      inputCommand();
    }
  });
}

// updateTodo 함수 구현
function updateTodo() {
  rl.question("상태를 변경할 todo의 id와 status를 입력하세요 : ", (input) => {
    let matchedTodo;
    const [id, status] = input.split(","); // 배열 디스트럭처링 기법 사용

    // 존재하지 않는 상태 혹은 미입력 예외 처리
    if (!statusList.includes(status))
      throw new Error("상태를 입력하지 않았거나 존재하지 않는 상태입니다.");

    if (id === "all") {
      let len = todoList.length;
      for (let i = 0; i < len; i++) {
        todoList = todoList.map((todo) => {
          matchedTodo = todo;
          todo.status = status;
          return todo;
        });
      }
      console.log(
        `해당 리스트의 모든 항목의 상태가 ${status}으로 변경되었습니다.\n`
      );
    } else {
      // map 함수로 id에 매칭되는 todo를 찾고, 해당 todo의 status를 변경한다.
      // id가 같은 todo는 matchedTodo에 저장한다.
      todoList = todoList.map((todo) => {
        if (todo.id === Number(id)) {
          matchedTodo = todo;
          todo.status = status;
        }
        return todo;
      });

      // 존재하지 않는 id 예외 처리
      if (matchedTodo === undefined) throw new Error("존재하지 않는 id입니다.");

      console.log(
        `${matchedTodo.name}(${id})의 상태가 ${status}으로 변경되었습니다.\n`
      );
    }
    inputCommand();
  });
}

// 프로그램 시작
init();
