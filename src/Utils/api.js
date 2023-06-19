import  axios  from 'axios';

const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIP_APP_KEY,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            process.env.REACT_APP_STRIPE_APP_DEV_URL + url,
            params
        );
        return data;
        // console.log("data:>>",data);
         /* here get method take two parameter one is url or second what ever you pass body in properties or other opeions or headers*/ 
    } catch (err) {
        console.log("error:>",err);
        return err;
    }
};

