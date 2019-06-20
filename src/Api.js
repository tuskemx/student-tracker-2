import axios from "axios";

const url = "https://nc-student-tracker.herokuapp.com/api/";

export const getStudents = param => {
  return axios.get(`${url}students`).then(response => {
    const { data } = response;
    return data;
  });
};

export const getBlock = param => {
  //delete later
  return axios.get(`${url}blocks/${param}/students`).then(response => {
    const { data } = response;
   
    return data;
  });
}

  export const postStudent = person => {
        return axios.post(`${url}students`, person).then((res) => {
          console.log(res, "api");
          console.log(res.status, "api")
          return res;
        })
  }


//blocks/1/students

