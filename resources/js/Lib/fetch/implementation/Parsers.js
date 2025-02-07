export const jsonResponseParser = async (response) => {
    return await response.json();
};
export const jsonBodyParser = arg => JSON.stringify(arg);
