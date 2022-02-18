import axios from 'axios'
import api from '../api.json'


export const getUserByUsername=async (name :any)=>{
    var config : any = {
        method: 'get',
        url: api.base_url+"user/username/"+name,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };
      var data :any =[]
      try {
          console.log(config.url)
        let response :any =await axios(config);
        var data=response.data.data;
        //then((response: any) => {
        //     // return data;
        //   console.log(response.data.data)

        //     data=response.data
        //     return data;

        // });
      } catch (error) {
        console.log('=========error======', error);

    }

    console.log(data);
    return data;
}
