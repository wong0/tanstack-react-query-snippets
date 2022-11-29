// Update Mutation
const mutation = useMutation((updatedUser) =>
  axios.put(`http://localhost:3004/users/${id}`, updatedUser)
);
