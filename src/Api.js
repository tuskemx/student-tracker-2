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

export const determineGraduation = (id, direction, name) => {
  return axios.patch(`${url}students/${id}?progress=${direction}`).then((res) => {

    if (direction === true && res.status === 200) {
      alert(`thank you for graduating ${name}`)
    }
    else if (direction === false && res.status === 200) {
      alert(`you have not graduated ${name}`)
    }
    return res;
  })
}

export const deleteStudent = (id) => {
  return axios.delete(`${url}students/${id}`).then((res) => {
    console.log(res);
    if (res.status === 204) {
      alert(`deleted ${id}`)
    }
    return res;
  })
}


//blocks/1/students

