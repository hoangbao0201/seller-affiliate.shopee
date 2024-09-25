import axios from "axios";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const slug = req.nextUrl.searchParams.get("slug") as string;

    const response = await axios.post(
        "https://affiliate.shopee.vn/api/v3/gql",
        {
            operationName: "batchGetCustomLink",
            query: "\n    query batchGetCustomLink($linkParams: [CustomLinkParam!], $sourceCaller: SourceCaller){\n      batchCustomLink(linkParams: $linkParams, sourceCaller: $sourceCaller){\n        shortLink\n        longLink\n        failCode\n      }\n    }\n    ",
            variables: {
                linkParams: [
                    {
                        originalLink: slug,
                        advancedLinkParams: {},
                    },
                ],
                sourceCaller: "CUSTOM_LINK_CALLER",
            },
        },
        {
            headers: {
                accept: "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9,vi;q=0.8",
                "af-ac-enc-dat": "6569f11fff9e20fc",
                "af-ac-enc-sz-token":
                    "d1O6ukHfuSYcdaLehunmfw==|nXpNMnxhBpvPa78eu3pzKj+W+zYiyZxI+bK2eiL/ONars+9bORxkHFB9JRe7IPJ8cNc7WMWs10Q=|q94YWWW/vQvfGYB6|08|3",
                "affiliate-program-type": "1",
                "content-type": "application/json; charset=UTF-8",
                cookie: "SPC_F=pIOQ4m6Nh1M296aHnpeeLl6lLhbPWfge; REC_T_ID=0f9e3d78-4a1d-11ef-a58d-72802c5be7e3; _gcl_au=1.1.469632877.1721867426; _fbp=fb.1.1721867433218.312791874726041254; SPC_CLIENTID=cElPUTRtNk5oMU0ycjtzksykjfbgmfxi; _hjSessionUser_868286=eyJpZCI6IjVmNzNiYWNiLWFlMDMtNTZjZS1iZTU0LWY5ZTI0MWVhOTg4YSIsImNyZWF0ZWQiOjE3MjI1MTgyNDk1NjAsImV4aXN0aW5nIjp0cnVlfQ==; _gcl_gs=2.1.k1$i1726029046; _gcl_aw=GCL.1726029051.CjwKCAjw3P-2BhAEEiwA3yPhwN0g6IUVFrFNFEGhm3vLHexB8whEoAmWJiAmp5lUCSV8znICv3nNiBoC1X0QAvD_BwE; _gac_UA-61914164-6=1.1726029051.CjwKCAjw3P-2BhAEEiwA3yPhwN0g6IUVFrFNFEGhm3vLHexB8whEoAmWJiAmp5lUCSV8znICv3nNiBoC1X0QAvD_BwE; SC_DFP=dBuTalUKmKIbgVxGmwshXDucHyIcUbAb; _QPWSDCXHZQA=566e3f8c-b6fc-4d78-f3b5-8ea2f314aa27; REC7iLP4Q=becda7a1-ef43-4c38-ba85-c1975821af69; _med=affiliates; _ga_TEVYGNDY1K=GS1.1.1726748961.2.0.1726748961.60.0.0; _ga_FV78QC1144=GS1.1.1726804992.1.1.1726805328.56.0.0; _gid=GA1.2.1567518636.1727253952; SPC_U=-; SPC_SI=rHzyZgAAAAB4MjFiWVBJed9kEgAAAAAAc3R5d2tyeUk=; SPC_R_T_ID=edD9yEt5IhMVDP71akc7XiCgMSIV1hzJMyfkiPfqzSou2VHQz0EtY07TpIR2D4wnxI7M4W/ayolu0VWmNzVOmRwm8/TD5H/s3a72VWRs10Oi9Xf38t1l03nf13m2n5UKhLgpqn/7EL+HU8B+ZSrsGu/PnC9DEo8zzW9fKzxg26E=; SPC_R_T_IV=VTVIWHFKMmJVSXJzTHJ5Zg==; SPC_T_ID=edD9yEt5IhMVDP71akc7XiCgMSIV1hzJMyfkiPfqzSou2VHQz0EtY07TpIR2D4wnxI7M4W/ayolu0VWmNzVOmRwm8/TD5H/s3a72VWRs10Oi9Xf38t1l03nf13m2n5UKhLgpqn/7EL+HU8B+ZSrsGu/PnC9DEo8zzW9fKzxg26E=; SPC_T_IV=VTVIWHFKMmJVSXJzTHJ5Zg==; SPC_EC=.WFVTb1YyTlh5YUJJNTZQSNkraoddLWT4dboePkYq6PyqoMdPrTlwZ2v28vMiQ0mEFYxs4ppzsjHd5SuEeUlfHLqWlt9JsU4r3R0KtgnPYN4Q8761YBx0s83vA5lEf66o5SoOKHWin0xbIZ2VV755NC7Q9XA2vPF6Fng2Wbml0geEBKGHBDPg2j8ekHjbVGwu+UwpJiScnU8G6BJ+DnzE84MWomKJRboAQ9XePx1xSr8drym0FSO4QyndIq2p0BrL; SPC_ST=.WFVTb1YyTlh5YUJJNTZQSNkraoddLWT4dboePkYq6PyqoMdPrTlwZ2v28vMiQ0mEFYxs4ppzsjHd5SuEeUlfHLqWlt9JsU4r3R0KtgnPYN4Q8761YBx0s83vA5lEf66o5SoOKHWin0xbIZ2VV755NC7Q9XA2vPF6Fng2Wbml0geEBKGHBDPg2j8ekHjbVGwu+UwpJiScnU8G6BJ+DnzE84MWomKJRboAQ9XePx1xSr8drym0FSO4QyndIq2p0BrL; _ga=GA1.1.814176292.1721867541; language=vi; _sapid=ab3abb59ca245a3f9b1f97f1c4a48fd42cc4f92f05625c6f535ebe17; shopee_webUnique_ccd=TIxr74IProVigSUqRbweOw%3D%3D%7CmnpNMnxhBpvPa78eu3pzKj%2BW%2BzYiyZxI%2BbK2enXnE9ars%2B9bORxkHFB9JRe7IPJ8cNc7WMWs10Q%3D%7Cq94YWWW%2FvQvfGYB6%7C08%7C3; ds=11b16fce2dcbf06f43d28f88a5c67f9f; _ga_4GPP1ZXG63=GS1.1.1727271558.20.1.1727271901.60.0.0", // Rút gọn cookie
                "csrf-token": "V7NgdPYi-bW_Rz5jAI5J8uKzojoQ4L1QVY38",
                origin: "https://affiliate.shopee.vn",
                priority: "u=1, i",
                referer: "https://affiliate.shopee.vn/offer/custom_link",
                "sec-ch-ua":
                    '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"Windows"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "user-agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
                "x-sap-ri":
                    "7514f466949f22928c23963d0301c9a2ca908663a660fc27d1dc",
                "x-sap-sec":
                    "xWtI+G0K1P0/UP0/v80QUPo/v80/UPo/UP0KUP0/WPo/USo6UPL/Ug0/vP0/UHhA+aTQUP0/JPd/UsY6UP0myfCi2HVIcQhiwH348OrWgK6Zp8PsQowSf+S65YoPIcHR37nR29O8wEcfDj0W6aEEU2yh1IsTynSewt8KPfhKZ7eScaKi9PpgJD/SlUx8rF4lq06rB4in0tRRdZ4RWU+wLt+XTgywYgPSst36442RHYaNi+KZnMhgOeVAO2ISnqseA+wR9HIc/QoklOhkegj1dCkXR1Dl9U9UF2fNqKelGJxJ7kBWlNPrFTokb5HtR/iq393vTgC5c2Fl3oQFxFX4hjmm8Ea6VHWNiFfRXX14nAv4T+Wm9jR1ELZHExUKA/Q8fmiJW1jpmF0OYmkzhXnKCzgtURhSKRXhWfA8twyjvRQnb44iv/9HPPsLtjU/U5LIwmxGxJ1M7Jcoy0iBif2K0VsaaUUbEmaDsM1pj8TjI3KhTIgfeDsDgL+4Zdu7SAhbQYIa6NzZdB0YyMdezeTc8Q75Dwilajs/bAAUDQN72JkSO+jnSkMskX05ptMPFjKlcoNXGzctulcrcROXM7vVkt/keEYCZ12rUtMtsFvsbBXn4J8Pns4BZriQrwAAaNalGFpV3avlOV+rBbRWtgucdpLJdNzkafyOt1c+91OBZb8i6YoWFN6qD7GA90jO8O7uQobPlYmGLyK8xeBAEJQpzNzBZOKjOdUzpVVyqLBg29WcvoXBUEJ4ibCxd+aUVPXuCCBEMUSZ0wUtEHZlO8iDiW1QEYssKPhU+9OjcIPkf+n1X7w+C/fuN0kU9Ofuuu8kvwdmlw+Cem7F0Ci/SxFJsHdCw8VUhij1KF28GAl1X0a5cN59qxNybgp4UDIb35WajbjZuhwn4vcHZRwZY2oBFNexu/2t2K2+H+rHKcLwlABKqwKCegYCWF2DseicSiQnRonUesl8FcTycbeUjDZraF1+aWobjGGfItus2MMTzZTHxCuHHhbL0k92Zr0OWXHZVZuJMTCp8AA0lP4WeoFF+bSTWpMN0RY1o+ZZsbFGX/aSQp1i99DNfuQZeDCIRjfLrrF92/q0fBBjIF0r5YyJRf+CR0boS9GiKo9s1hLJdRBZOszxR4RlS4+cYCPUzwAZfKoD8g3pc6T/t0i0Ttxi15+K+EftA9ZwqsL7sgX2D29...", // Tiếp tục các phần của cookie khác
            },
        }
    );

    const data = response.data.data.batchCustomLink[0];

    if(data?.failCode === 0) {
        return new Response(JSON.stringify({ success: true, data: data }), { status: 200 });
    }
    else {
        return new Response(JSON.stringify({ success: false }), { status: 200 });
    }

}

// import axios from "axios";
// import * as cheerio from "cheerio";

// export async function GET(req: Request, res: any) {

//     try {
//         const slug = String(res.params.page);

//         const baseUrl = new URL(slug).origin;
//         const response = await axios.get(slug, {
//             headers: {
//                 referer: baseUrl,
//                 "User-Agent":
//                     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
//             },
//         });
//         const $ = cheerio.load(response.data);

//         const metaOgUrl = $('meta[property="og:url"]').attr("content");

//         console.log(metaOgUrl)

//         return res.json({ success: true, metaOgUrl });
//     } catch (err) {
//         return res.json({
//             success: false,
//             message: "Failed to fetch data",
//         });
//     }
// }
