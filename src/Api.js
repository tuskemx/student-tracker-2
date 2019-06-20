import axios from "axios";

const url = "https://nc-student-tracker.herokuapp.com/api/";

export const getStudents = param => {
  return axios.get(`${url}students`).then(response => {
    const { data } = response;
    console.log(data);
    return data;
  });
};
