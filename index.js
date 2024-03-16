const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=The+Reason&type=track', {
    headers: {
    'Authorization': 'Bearer BQDcbyxoOKBwhd5_6gwdceEiepFlj5ywA4mUYhsfukVYnbijSoPktmcfspOmPctFOER5p38ja4bl5dCXs1eFjkB5IPLZ8rMhZZFuKMB9C_0kDfpU2WhFOx63jT6O3BVsxnivTTjrW_J3zTejqDTDlcG3mCU_moGLvLCu0MBLYB55NV6pE1kBlGXQlOF7i1CNdu2zHkboy7egjA8'
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id);
})