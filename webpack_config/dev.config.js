
const proxy = [
	// { path: ['/api/v1'], target: 'http://192.168.11.193:9999'},///customer/api/v1/index/data
	{ path: ['/customer'], target: 'https://policy.apluslabs.com' },
	{ path: ['/weixin_40755688'], target: 'https://blog.csdn.net' },
];
module.exports = {
	ip: "0.0.0.0",
	port: 8002,
	proxy
};
