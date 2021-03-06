import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const tradehistory_ETH_BTC = [
			{
				"trade_id": 123456789,
				"time": "2017-11-20T16:09:11.749Z",
				"side": "buy",
				"price": "0.05838200",
				"size": "0.22019001"
			},
			{
				"time": "2017-11-19T20:47:22.358Z",
				"trade_id": 12345678,
				"side": "buy",
				"price": "0.05838200",
				"size": "0.29233623"
			},
			{
				"time": "2017-11-19T14:47:01.869Z",
				"trade_id": 12345679,
				"side": "buy",
				"price": "0.05838200",
				"size": "1.02642599"
			},
			{
				"time": "2017-11-19T13:23:22.310Z",
				"trade_id": 12345689,
				"side": "buy",
				"price": "0.05838200",
				"size": "3.05711147"
			},
			{
				"time": "2017-11-20T16:06:43.793Z",
				"trade_id": 12345789,
				"side": "buy",
				"price": "0.05838200",
				"size": "0.28080831"
			},
			{
				"time": "2017-11-20T20:37:38.618Z",
				"trade_id": 12346789,
				"side": "buy",
				"price": "0.05838200",
				"size": "0.28151382"
			},
			{
				"time": "2017-11-19T23:20:20.697Z",
				"trade_id": 12356789,
				"side": "buy",
				"price": "0.05838150",
				"size": "2.14155290"
			},
			{
				"time": "2017-11-20T19:51:07.044Z",
				"trade_id": 12456789,
				"side": "buy",
				"price": "0.05838150",
				"size": "0.76724233"
			},
			{
				"time": "2017-11-19T12:06:21.792Z",
				"trade_id": 13456789,
				"side": "buy",
				"price": "0.05838150",
				"size": "0.16017410"
			},
			{
				"time": "2017-11-20T15:07:06.957Z",
				"trade_id": 23456789,
				"side": "buy",
				"price": "0.05838200",
				"size": "1.91128474"
			},
			{
				"time": "2017-11-20T15:09:19.406Z",
				"trade_id": 3456789,
				"side": "buy",
				"price": "0.05838200",
				"size": "0.67655707"
			},
			{
				"time": "2017-11-20T00:26:43.857Z",
				"trade_id": 1256789,
				"side": "buy",
				"price": "0.05838200",
				"size": "1.09230917"
			},
			{
				"time": "2017-11-19T08:42:35.253Z",
				"trade_id": 1236789,
				"side": "buy",
				"price": "0.05838150",
				"size": "0.01000001"
			},
			{
				"time": "2017-11-20T18:25:33.427Z",
				"trade_id": 1234789,
				"side": "buy",
				"price": "0.05838150",
				"size": "0.14932287"
			},
			{
				"time": "2017-11-20T12:55:40.164Z",
				"trade_id": 1234589,
				"side": "sell",
				"price": "0.05838000",
				"size": "0.13411540"
			},
			{
				"time": "2017-11-19T20:53:37.931Z",
				"trade_id": 1234569,
				"side": "sell",
				"price": "0.05838000",
				"size": "0.01978767"
			},
			{
				"time": "2017-11-19T16:50:56.159Z",
				"trade_id": 12345678,
				"side": "sell",
				"price": "0.05838000",
				"size": "0.08286200"
			},
			{
				"time": "2017-11-20T14:58:28.327Z",
				"trade_id": 123456,
				"side": "sell",
				"price": "0.05838150",
				"size": "0.13030914"
			},
			{
				"time": "2017-11-19T23:33:58.988Z",
				"trade_id": 123789,
				"side": "sell",
				"price": "0.05838150",
				"size": "0.47636965"
			},
			{
				"time": "2017-11-20T04:19:21.783Z",
				"trade_id": 456789,
				"side": "buy",
				"price": "0.05838200",
				"size": "0.04270156"
			},
			{
				"time": "2017-11-20T13:25:49.196Z",
				"trade_id": 156789,
				"side": "sell",
				"price": "0.05838150",
				"size": "0.14488800"
			},
			{
				"time": "2017-11-20T04:21:31.111Z",
				"trade_id": 126789,
				"side": "buy",
				"price": "0.05838200",
				"size": "0.14488712"
			},
			{
				"time": "2017-11-19T11:40:15.649Z",
				"trade_id": 12378,
				"side": "buy",
				"price": "0.05838200",
				"size": "0.55802775"
			},
			{
				"time": "2017-11-19T22:09:02.230Z",
				"trade_id": 789,
				"side": "buy",
				"price": "0.05838200",
				"size": "0.07985433"
			},
			{
				"time": "2017-11-20T15:30:40.106Z",
				"trade_id": 78978978,
				"side": "sell",
				"price": "0.05838150",
				"size": "0.43370349"
			},
			{
				"time": "2017-11-19T16:49:30.567Z",
				"trade_id": 78978978,
				"side": "sell",
				"price": "0.05838150",
				"size": "0.43370349"
			}
		];

		const tradehistory_BTC_USD = [
			{ "time": "2017-10-19T16:30:31.656Z", "trade_id": 22235155, "price": "5665.14000000", "size": "0.00000176", "side": "sell" }, { "time": "2017-10-19T16:30:28.643Z", "trade_id": 22235154, "price": "5665.14000000", "size": "0.03130404", "side": "sell" }, { "time": "2017-10-19T16:30:28.643Z", "trade_id": 22235153, "price": "5665.14000000", "size": "0.01066261", "side": "sell" }, { "time": "2017-10-19T16:30:28.643Z", "trade_id": 22235152, "price": "5665.14000000", "size": "0.03198608", "side": "sell" }, { "time": "2017-10-19T16:30:24.994Z", "trade_id": 22235151, "price": "5665.13000000", "size": "0.02784550", "side": "buy" }, { "time": "2017-10-19T16:30:24.994Z", "trade_id": 22235150, "price": "5665.13000000", "size": "0.01000000", "side": "buy" }, { "time": "2017-10-19T16:30:24.994Z", "trade_id": 22235149, "price": "5665.13000000", "size": "0.03315450", "side": "buy" }, { "time": "2017-10-19T16:30:24.994Z", "trade_id": 22235148, "price": "5665.13000000", "size": "0.03000000", "side": "buy" }, { "time": "2017-10-19T16:30:24.994Z", "trade_id": 22235147, "price": "5665.13000000", "size": "0.32000000", "side": "buy" }, { "time": "2017-10-19T16:30:21.626Z", "trade_id": 22235146, "price": "5665.14000000", "size": "0.00000176", "side": "sell" }, { "time": "2017-10-19T16:30:14.053Z", "trade_id": 22235145, "price": "5665.14000000", "size": "0.00176077", "side": "sell" }, { "time": "2017-10-19T16:30:13.645Z", "trade_id": 22235144, "price": "5665.14000000", "size": "0.10479310", "side": "sell" }, { "time": "2017-10-19T16:30:13.645Z", "trade_id": 22235143, "price": "5665.14000000", "size": "0.25000000", "side": "sell" }, { "time": "2017-10-19T16:30:13.645Z", "trade_id": 22235142, "price": "5665.14000000", "size": "1.39083374", "side": "sell" }, { "time": "2017-10-19T16:30:13.645Z", "trade_id": 22235141, "price": "5665.14000000", "size": "0.08823707", "side": "sell" }, { "time": "2017-10-19T16:30:13.645Z", "trade_id": 22235140, "price": "5665.14000000", "size": "1.23156745", "side": "sell" }, { "time": "2017-10-19T16:30:11.679Z", "trade_id": 22235139, "price": "5665.14000000", "size": "0.00000176", "side": "sell" }, { "time": "2017-10-19T16:30:04.433Z", "trade_id": 22235138, "price": "5665.14000000", "size": "0.00002641", "side": "sell" }, { "time": "2017-10-19T16:30:02.391Z", "trade_id": 22235137, "price": "5665.14000000", "size": "0.00000176", "side": "sell" }, { "time": "2017-10-19T16:30:00.818Z", "trade_id": 22235136, "price": "5665.14000000", "size": "0.00017607", "side": "sell" }, { "time": "2017-10-19T16:29:52.225Z", "trade_id": 22235135, "price": "5665.14000000", "size": "0.00000176", "side": "sell" }, { "time": "2017-10-19T16:29:51.355Z", "trade_id": 22235134, "price": "5665.14000000", "size": "0.14290000", "side": "sell" }, { "time": "2017-10-19T16:29:42.354Z", "trade_id": 22235133, "price": "5665.14000000", "size": "0.00000176", "side": "sell" }, { "time": "2017-10-19T16:29:32.448Z", "trade_id": 22235132, "price": "5665.14000000", "size": "0.00000176", "side": "sell" }, { "time": "2017-10-19T16:29:22.637Z", "trade_id": 22235131, "price": "5665.14000000", "size": "0.00000176", "side": "sell" }, { "time": "2017-10-19T16:29:22.041Z", "trade_id": 22235130, "price": "5665.14000000", "size": "0.02295206", "side": "sell" }, { "time": "2017-10-19T16:29:21.079Z", "trade_id": 22235129, "price": "5665.14000000", "size": "0.01760779", "side": "sell" }, { "time": "2017-10-19T16:29:18.168Z", "trade_id": 22235128, "price": "5665.14000000", "size": "0.00001056", "side": "sell" }, { "time": "2017-10-19T16:29:12.849Z", "trade_id": 22235127, "price": "5665.14000000", "size": "0.58610000", "side": "sell" }, { "time": "2017-10-19T16:29:12.253Z", "trade_id": 22235126, "price": "5665.14000000", "size": "0.00000176", "side": "sell" }, { "time": "2017-10-19T16:29:02.8Z", "trade_id": 22235125, "price": "5665.14000000", "size": "0.00000176", "side": "sell" }, { "time": "2017-10-19T16:29:02.043Z", "trade_id": 22235124, "price": "5665.14000000", "size": "0.02066502", "side": "sell" }, { "time": "2017-10-19T16:29:01.744Z", "trade_id": 22235123, "price": "5665.14000000", "size": "0.60779643", "side": "sell" }, { "time": "2017-10-19T16:28:55.209Z", "trade_id": 22235122, "price": "5665.14000000", "size": "0.63388061", "side": "sell" }, { "time": "2017-10-19T16:28:51.857Z", "trade_id": 22235121, "price": "5665.14000000", "size": "0.00000176", "side": "sell" }, { "time": "2017-10-19T16:28:41.961Z", "trade_id": 22235120, "price": "5665.14000000", "size": "0.00000176", "side": "sell" }, { "time": "2017-10-19T16:28:40.509Z", "trade_id": 22235119, "price": "5665.14000000", "size": "0.05630000", "side": "sell" }, { "time": "2017-10-19T16:28:38.402Z", "trade_id": 22235118, "price": "5665.14000000", "size": "0.02977920", "side": "sell" }, { "time": "2017-10-19T16:28:38.402Z", "trade_id": 22235117, "price": "5665.14000000", "size": "0.03689512", "side": "sell" }, { "time": "2017-10-19T16:28:31.88Z", "trade_id": 22235116, "price": "5665.14000000", "size": "0.00000176", "side": "sell" }, { "time": "2017-10-19T16:28:25.008Z", "trade_id": 22235115, "price": "5665.14000000", "size": "0.01309256", "side": "sell" }, { "time": "2017-10-19T16:28:24.846Z", "trade_id": 22235114, "price": "5665.14000000", "size": "0.00001056", "side": "sell" }, { "time": "2017-10-19T16:28:21.926Z", "trade_id": 22235113, "price": "5668.94000000", "size": "0.00000175", "side": "sell" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235112, "price": "5660.03000000", "size": "0.58585177", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235111, "price": "5661.23000000", "size": "0.08832000", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235110, "price": "5661.30000000", "size": "0.05000000", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235109, "price": "5662.25000000", "size": "0.54782472", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235108, "price": "5662.59000000", "size": "0.01000000", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235107, "price": "5664.00000000", "size": "0.05000000", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235106, "price": "5664.01000000", "size": "0.10000000", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235105, "price": "5664.43000000", "size": "0.01455560", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235104, "price": "5664.67000000", "size": "0.02000000", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235103, "price": "5664.67000000", "size": "0.05000000", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235102, "price": "5664.71000000", "size": "0.05000000", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235101, "price": "5664.71000000", "size": "0.05000000", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235100, "price": "5665.00000000", "size": "0.01000000", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235099, "price": "5668.71000000", "size": "0.18270157", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235098, "price": "5668.71000000", "size": "1.00000000", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235097, "price": "5669.08000000", "size": "0.10000000", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235096, "price": "5669.10000000", "size": "5.02000000", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235095, "price": "5669.10000000", "size": "0.01000000", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235094, "price": "5669.10000000", "size": "0.01000000", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235093, "price": "5669.10000000", "size": "2.02074634", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235092, "price": "5669.10000000", "size": "0.02000000", "side": "buy" }, { "time": "2017-10-19T16:28:19.97Z", "trade_id": 22235091, "price": "5669.10000000", "size": "0.01000000", "side": "buy" }, { "time": "2017-10-19T16:28:11.868Z", "trade_id": 22235090, "price": "5669.11000000", "size": "0.00000175", "side": "sell" }, { "time": "2017-10-19T16:28:09.219Z", "trade_id": 22235089, "price": "5669.11000000", "size": "1.52030000", "side": "sell" }, { "time": "2017-10-19T16:28:02.305Z", "trade_id": 22235088, "price": "5669.11000000", "size": "0.00000175", "side": "sell" }, { "time": "2017-10-19T16:27:51.462Z", "trade_id": 22235087, "price": "5669.11000000", "size": "0.00000175", "side": "sell" }, { "time": "2017-10-19T16:27:43.419Z", "trade_id": 22235086, "price": "5669.11000000", "size": "0.70339459", "side": "sell" }, { "time": "2017-10-19T16:27:43.419Z", "trade_id": 22235085, "price": "5669.11000000", "size": "0.08819726", "side": "sell" }, { "time": "2017-10-19T16:27:43.419Z", "trade_id": 22235084, "price": "5669.11000000", "size": "0.01646049", "side": "sell" }, { "time": "2017-10-19T16:27:41.407Z", "trade_id": 22235083, "price": "5669.11000000", "size": "0.00000175", "side": "sell" }, { "time": "2017-10-19T16:27:39.795Z", "trade_id": 22235082, "price": "5669.11000000", "size": "0.00038806", "side": "sell" }, { "time": "2017-10-19T16:27:37.665Z", "trade_id": 22235081, "price": "5669.11000000", "size": "1.24400000", "side": "sell" }, { "time": "2017-10-19T16:27:31.513Z", "trade_id": 22235080, "price": "5669.11000000", "size": "0.00000175", "side": "sell" }, { "time": "2017-10-19T16:27:27.229Z", "trade_id": 22235079, "price": "5669.11000000", "size": "0.00915140", "side": "sell" }, { "time": "2017-10-19T16:27:26.933Z", "trade_id": 22235078, "price": "5669.11000000", "size": "1.96768994", "side": "sell" }, { "time": "2017-10-19T16:27:26.933Z", "trade_id": 22235077, "price": "5669.11000000", "size": "0.02728381", "side": "sell" }, { "time": "2017-10-19T16:27:21.448Z", "trade_id": 22235076, "price": "5669.11000000", "size": "0.00000175", "side": "sell" }, { "time": "2017-10-19T16:27:18.388Z", "trade_id": 22235075, "price": "5669.11000000", "size": "0.00001055", "side": "sell" }, { "time": "2017-10-19T16:27:11.521Z", "trade_id": 22235074, "price": "5669.11000000", "size": "0.47032576", "side": "sell" }, { "time": "2017-10-19T16:27:11.517Z", "trade_id": 22235073, "price": "5669.11000000", "size": "0.00000175", "side": "sell" }, { "time": "2017-10-19T16:27:08.381Z", "trade_id": 22235072, "price": "5669.11000000", "size": "0.04277420", "side": "sell" }, { "time": "2017-10-19T16:27:08.381Z", "trade_id": 22235071, "price": "5669.11000000", "size": "0.01261885", "side": "sell" }, { "time": "2017-10-19T16:27:06.272Z", "trade_id": 22235070, "price": "5669.11000000", "size": "0.54308120", "side": "sell" }, { "time": "2017-10-19T16:27:06.272Z", "trade_id": 22235069, "price": "5669.11000000", "size": "0.01652230", "side": "sell" }, { "time": "2017-10-19T16:27:06.272Z", "trade_id": 22235068, "price": "5669.11000000", "size": "0.04999650", "side": "sell" }, { "time": "2017-10-19T16:27:01.83Z", "trade_id": 22235067, "price": "5669.11000000", "size": "0.00000175", "side": "sell" }, { "time": "2017-10-19T16:26:52.007Z", "trade_id": 22235066, "price": "5669.11000000", "size": "0.00000175", "side": "sell" }, { "time": "2017-10-19T16:26:49.502Z", "trade_id": 22235065, "price": "5669.10000000", "size": "0.68000000", "side": "buy" }, { "time": "2017-10-19T16:26:49.502Z", "trade_id": 22235064, "price": "5669.10000000", "size": "0.32000000", "side": "buy" }, { "time": "2017-10-19T16:26:46.668Z", "trade_id": 22235063, "price": "5668.80000000", "size": "0.03079374", "side": "sell" }, { "time": "2017-10-19T16:26:46.637Z", "trade_id": 22235062, "price": "5668.80000000", "size": "1.72705584", "side": "sell" }, { "time": "2017-10-19T16:26:45.317Z", "trade_id": 22235061, "price": "5668.80000000", "size": "0.01075158", "side": "sell" }, { "time": "2017-10-19T16:26:45.317Z", "trade_id": 22235060, "price": "5667.02000000", "size": "0.01654257", "side": "sell" }, { "time": "2017-10-19T16:26:42.12Z", "trade_id": 22235059, "price": "5667.02000000", "size": "0.00000176", "side": "sell" }, { "time": "2017-10-19T16:26:36.315Z", "trade_id": 22235058, "price": "5669.02000000", "size": "0.45639861", "side": "sell" }, { "time": "2017-10-19T16:26:34.327Z", "trade_id": 22235057, "price": "5665.34000000", "size": "1.63431179", "side": "sell" }, { "time": "2017-10-19T16:26:34.327Z", "trade_id": 22235056, "price": "5665.00000000", "size": "1.17758821", "side": "sell" }
		]

		const orderbook_BTC_USD = [
			{ "sequence": 4196538113, "bids": [["5691.37", "1.44974087", 4], ["5691.36", "0.33", 1], ["5691.01", "0.02", 1], ["5691", "1.07218541", 2], ["5690.61", "1.7536", 1], ["5690.57", "4.01", 1], ["5690.52", "0.17252825", 1], ["5690", "7.57149852", 8], ["5689.51", "0.06", 1], ["5689.48", "1", 1], ["5688.35", "0.35", 1], ["5688.01", "0.06", 1], ["5688", "0.05", 1], ["5686.51", "0.02", 1], ["5685.01", "0.1", 1], ["5685", "2.98601217", 3], ["5684.9", "0.4", 1], ["5684", "0.8850095", 1], ["5683.51", "0.06", 1], ["5683.18", "1.22831", 1], ["5682.08", "0.15", 1], ["5682.04", "0.05", 1], ["5682.03", "32.44", 1], ["5681.38", "0.44", 1], ["5680.84", "0.11671396", 1], ["5680.51", "0.06", 1], ["5680.43", "0.01128126", 1], ["5680", "0.1", 1], ["5679.23", "0.02", 1], ["5679.08", "1", 1], ["5678", "0.08", 1], ["5677.88", "0.3", 1], ["5677.49", "0.0104289", 1], ["5676.97", "3.4265", 1], ["5676.9", "0.11996336", 1], ["5676.5", "0.14097235", 1], ["5675", "1.5338", 5], ["5674.51", "0.06", 1], ["5674", "0.3", 1], ["5673.01", "0.06", 1], ["5671.11", "1.3218853", 1], ["5671", "0.8781", 2], ["5670.88", "0.02038038", 1], ["5670.76", "0.06", 1], ["5670.51", "1.28", 2], ["5670.01", "0.02", 1], ["5670", "0.85075", 5], ["5669.24", "0.04494652", 1], ["5668", "0.2", 1], ["5667.5", "0.010005", 1]], "asks": [["5691.38", "46.1341073", 3], ["5691.39", "0.011", 1], ["5692.96", "1.75399", 1], ["5693", "1", 1], ["5695.3", "4.38043907", 1], ["5695.81", "0.01", 1], ["5696", "0.66646526", 1], ["5696.52", "0.025", 1], ["5696.82", "0.1628", 1], ["5696.85", "0.0679", 1], ["5696.96", "0.0486", 2], ["5696.99", "0.05", 1], ["5697", "20", 1], ["5697.24", "0.2307", 2], ["5697.33", "0.0259", 1], ["5697.37", "0.0227", 1], ["5697.6", "0.1628", 1], ["5697.65", "0.0679", 1], ["5697.71", "0.0227", 1], ["5697.79", "0.0259", 1], ["5698.14", "0.1628", 1], ["5698.24", "0.0259", 1], ["5698.3", "0.0679", 1], ["5698.33", "0.0227", 1], ["5698.8", "1.22723", 1], ["5698.84", "0.1628", 1], ["5698.92", "0.0227", 1], ["5699.03", "0.0679", 1], ["5699.07", "0.0259", 1], ["5699.51", "0.0227", 1], ["5699.74", "0.1628", 1], ["5699.78", "0.0679", 1], ["5699.88", "0.0259", 1], ["5699.98", "0.01", 1], ["5700", "0.64433595", 5], ["5700.15", "0.24", 1], ["5700.19", "0.02", 1], ["5700.4", "0.0227", 1], ["5700.46", "0.1628", 1], ["5700.51", "0.0679", 1], ["5700.71", "0.02", 1], ["5700.73", "0.0259", 1], ["5700.9", "0.01754", 1], ["5701.24", "0.02", 1], ["5701.73", "0.01", 1], ["5701.87", "0.1887", 2], ["5701.94", "0.0227", 1], ["5702", "0.0679", 1], ["5702.7", "0.01754", 1], ["5702.72", "0.381018", 1]] }
		];

		const orderbook_ETH_BTC = [
			{ "sequence": 637079712, "bids": [["0.05395", "0.0561193", 1], ["0.05394", "0.065604", 1], ["0.05392", "0.07313057", 1], ["0.05389", "0.2453898", 1], ["0.05388", "0.22312223", 1], ["0.05387", "0.30287494", 2], ["0.05386", "2.52", 1], ["0.05385", "11.512714", 2], ["0.05382", "0.192854", 1], ["0.05379", "0.45443543", 1], ["0.05377", "0.065604", 1], ["0.05376", "0.04392692", 1], ["0.0537", "0.23392953", 1], ["0.05368", "0.065604", 1], ["0.05367", "0.01", 1], ["0.05358", "0.188364", 2], ["0.05354", "396.112984", 1], ["0.05352", "10.3856", 1], ["0.05351", "36.3553", 2], ["0.0535", "3.7735448", 2], ["0.05346", "0.01", 1], ["0.05345", "0.05425631", 1], ["0.05342", "10.4089", 1], ["0.05341", "10.4031", 1], ["0.0534", "10.4089", 1], ["0.05339", "10.4106", 5], ["0.05338", "6.62765518", 2], ["0.05337", "0.01", 1], ["0.05336", "0.8635", 1], ["0.05333", "0.4", 1], ["0.05332", "10.4206", 1], ["0.05331", "10.4265", 1], ["0.0533", "10.4424", 2], ["0.05329", "259.639", 1], ["0.05326", "10.4382", 1], ["0.05325", "14.4441", 2], ["0.05323", "0.22731542", 1], ["0.0532", "0.05553553", 1], ["0.05315", "2", 1], ["0.0531", "0.4", 1], ["0.05306", "10.45", 1], ["0.05305", "123.20213", 1], ["0.05304", "0.2978", 2], ["0.05303", "4.57805177", 2], ["0.05301", "109.13812288", 1], ["0.053", "44.42307689", 7], ["0.05298", "0.84143399", 1], ["0.05295", "4.61", 1], ["0.0529", "0.01", 1], ["0.05289", "0.01", 1]], "asks": [["0.05404", "0.46", 5], ["0.05405", "33.7357", 1], ["0.05406", "0.83373299", 1], ["0.05407", "41.381", 1], ["0.05408", "0.072019", 1], ["0.05411", "25.9639", 1], ["0.05414", "0.1", 1], ["0.05417", "0.01", 1], ["0.05419", "10.19491391", 2], ["0.0542", "0.05", 1], ["0.05425", "3.78774103", 5], ["0.0543", "28.442019", 2], ["0.05431", "102.48165", 2], ["0.05432", "0.01", 1], ["0.05433", "24.76", 2], ["0.05437", "26.15573628", 2], ["0.05438", "410.041737", 1], ["0.0544", "0.072019", 1], ["0.05444", "7.9056", 1], ["0.05445", "26.24115443", 2], ["0.05446", "264.639", 2], ["0.05447", "0.028947", 1], ["0.05449", "9.9056", 2], ["0.0545", "15.81706276", 2], ["0.05451", "13.83760546", 3], ["0.05452", "0.84752414", 1], ["0.05453", "0.77061794", 1], ["0.05454", "2.22388787", 2], ["0.05455", "0.63728783", 1], ["0.05456", "8.57548517", 3], ["0.05457", "13.43121488", 3], ["0.05458", "0.47810121", 1], ["0.05459", "0.43426685", 1], ["0.0546", "0.39402746", 1], ["0.05462", "7.9056", 1], ["0.05463", "11.34984905", 3], ["0.05464", "28.55916504", 1], ["0.05466", "2.0161", 2], ["0.05468", "7.9053", 1], ["0.05469", "7.9052", 1], ["0.0547", "5", 1], ["0.05472", "173.13608", 2], ["0.05473", "0.1", 1], ["0.05474", "0.46842543", 1], ["0.05475", "168.12426611", 5], ["0.05479", "5", 1], ["0.0548", "3.09678", 3], ["0.05481", "0.31415", 2], ["0.05484", "0.1", 1], ["0.05485", "37.57030831", 2]] }
		];

		const dxOrderbook = [
			{
				"id": "8d8a570e1b3d003c2a2063491f9eea14e27fe3800443c981b0535aff9f59e37c",
				"from": "LTC",
				"from address": "LTnoVFAnKSMj4v2eFXBJuMmyjqSQT9eXBy",
				"fromAmount": "0.00050000000000000001",
				"to": "SYS",
				"to address": "12BueeBVD2uiAHViXf7jPVQb2MSQ1Eggey",
				"toAmount": "1",
				"state": "Open"
			}
		];

		const dxTradeHistory = [
			{
				"id": "8d8a570e1b3d003c2a2063491f9eea14e27fe3800443c981b0535aff9f59e37c",
				"from": "LTC",
				"from address": "LTnoVFAnKSMj4v2eFXBJuMmyjqSQT9eXBy",
				"fromAmount": "0.00050000000000000001",
				"to": "SYS",
				"to address": "12BueeBVD2uiAHViXf7jPVQb2MSQ1Eggey",
				"toAmount": "1",
				"state": "Expired"
			},
			{
				"id": "8d8a570e1b3d003c2a2063491f9eea14e27fe3800443c981b0535afacf59e37c",
				"from": "BTC",
				"from address": "LTnoVFAnKSMj4v2eFXBJuMmyjqSQT9eXBy",
				"fromAmount": "0.00050000000000000001",
				"to": "SYS",
				"to address": "12BueeBVD2uiAHViXf7jPVQb2MSQ1Eggey",
				"toAmount": "1000",
				"state": "Open"
			}
		];

		const priceChart = [
			{
				"t": [1508172180, 1508172120, 1508172060, 1508172000, 1508171940, 1508171880, 1508171820, 1508171760, 1508171700, 1508171640, 1508171580, 1508171520, 1508171460, 1508171400, 1508171340, 1508171280, 1508171220, 1508171160, 1508171100, 1508171040, 1508170980, 1508170920, 1508170860, 1508170800, 1508170740, 1508170680, 1508170620, 1508170560, 1508170500, 1508170440, 1508170380, 1508170320, 1508170260, 1508170200, 1508170140],
				"l": [5655, 5655.01, 5655, 5655.01, 5655.01, 5655, 5655, 5655, 5660, 5660.88, 5675, 5684.99, 5684.99, 5684.99, 5684.99, 5684.99, 5684.66, 5683.01, 5681.34, 5682.07, 5681.61, 5680.01, 5680, 5680, 5680, 5680.54, 5680.51, 5685, 5689.31, 5689, 5689.01, 5689, 5689, 5690.99, 5693.4],
				"h": [5655.01, 5655.01, 5661.41, 5661.41, 5655.01, 5655.01, 5655.01, 5660.01, 5660.89, 5675.01, 5685, 5685, 5685, 5685, 5685, 5685, 5685, 5685, 5683.01, 5683.01, 5683.01, 5683.01, 5680.01, 5680.01, 5680.55, 5681.1, 5685.01, 5689.48, 5691.61, 5690.33, 5689.01, 5689.01, 5692.91, 5693.41, 5693.41],
				"o": [5655.01, 5655.01, 5661.41, 5655.01, 5655.01, 5655.01, 5655.01, 5660, 5660.89, 5675.01, 5685, 5685, 5684.99, 5685, 5685, 5685, 5685, 5683.01, 5683, 5683.01, 5683.01, 5680.01, 5680, 5680.01, 5680.55, 5680.79, 5685.01, 5689.47, 5690.32, 5689.01, 5689.01, 5689.01, 5692.91, 5693.41, 5693.41],
				"c": [5655.01, 5655.01, 5655, 5661.41, 5655.01, 5655.01, 5655.01, 5655, 5660, 5660.89, 5675.01, 5685, 5685, 5685, 5685, 5685, 5685, 5685, 5683.01, 5683, 5683.01, 5682.99, 5680.01, 5680.01, 5680.01, 5680.55, 5680.51, 5685.01, 5689.5, 5690.31, 5689.01, 5689.01, 5689.01, 5690.99, 5693.41],
				"v": [0.30885251, 0.77091373, 16.13651682, 6.71335749, 5.09807991, 3.06063451, 4.05437786, 8.60780385, 8.35072431, 13.79467279, 8.45077126, 3.7762999, 6.3465887, 6.99908024, 3.19049635, 0.73070529, 4.93170861, 3.24374609, 1.93393315, 1.94763219, 4.18747196, 2.9758666, 2.87012216, 2.31176793, 7.7629311, 4.26195278, 5.29380695, 5.60438362, 5.77967055, 33.87091579, 5.67108278, 0.79782874, 1.68101626, 9.55470572, 0.067517],
				"s": "ok"
			}
		]

		const stats_ETH = [
			{ "open": "0.05567000", "high": "0.05778000", "low": "0.05572000", "volume": "15503.56433807", "last": "0.05655000", "volume_30day": "343295.83606666" }
		]

		const stats_BTC = [
			{ "open": "5424.11000000", "high": "5750.00000000", "low": "5364.04000000", "volume": "11375.21062595", "last": "5664.81000000", "volume_30day": "304894.82160373" }
		]

    const openorders_ETH_BTC = [
      {
      	"id": "1c4c474a-1226-432e-bb57-be00a349ddd7",
      	"price": "0.05011999",
      	"size": "1.00000000",
        "product_id": "ETH-BTC",
      	"side": "sell",
      	"stp": "dc",
      	"type": "limit",
      	"time_in_force": "GTC",
      	"post_only": true,
      	"created_at": "2017-11-16T20:05:15+00:00",
      	"fill_fees": "0.0000000000000000",
      	"filled_size": "0.00000000",
      	"executed_value": "0.0000000000000000",
      	"status": "open",
      	"settled": false
      }, {
      	"id": "00426d45-8425-4af0-ad53-9599453bd038",
      	"price": "0.04994000",
      	"size": "51.11000000",
        "product_id": "ETH-BTC",
      	"side": "sell",
      	"stp": "dc",
      	"type": "limit",
      	"time_in_force": "GTC",
      	"post_only": true,
      	"created_at": "2017-11-21T20:05:15+00:00",
      	"fill_fees": "0.0000000000000000",
      	"filled_size": "0.00000000",
      	"executed_value": "0.0000000000000000",
      	"status": "open",
      	"settled": false
      }, {
      	"id": "48d136e7-7aac-4331-8920-355483a5d739",
      	"price": "0.04923000",
      	"size": "0.01000000",
        "product_id": "ETH-BTC",
      	"side": "buy",
      	"stp": "dc",
      	"type": "limit",
      	"time_in_force": "GTC",
      	"post_only": true,
      	"created_at": "2017-11-16T20:05:15+00:00",
      	"fill_fees": "0.0000000000000000",
      	"filled_size": "0.00000000",
      	"executed_value": "0.0000000000000000",
      	"status": "open",
      	"settled": false
      }
		]

		const filledorders_ETH_BTC = [
      {
      	"id": "1c4c474a-1226-432e-bb57-be00a349ddd7",
      	"price": "0.05011999",
      	"size": "1.00000000",
        "product_id": "ETH-BTC",
      	"side": "sell",
      	"stp": "dc",
      	"type": "limit",
      	"time_in_force": "GTC",
      	"post_only": true,
      	"created_at": "2017-11-21T20:05:15+00:00",
      	"fill_fees": "0.0000000000000000",
      	"filled_size": "0.00000000",
      	"executed_value": "0.0000000000000000",
      	"status": "open",
      	"settled": false
      }, {
      	"id": "00426d45-8425-4af0-ad53-9599453bd038",
      	"price": "0.04994000",
      	"size": "51.11000000",
        "product_id": "ETH-BTC",
      	"side": "sell",
      	"stp": "dc",
      	"type": "limit",
      	"time_in_force": "GTC",
      	"post_only": true,
      	"created_at": "2017-11-20T20:05:15+00:00",
      	"fill_fees": "0.0000000000000000",
      	"filled_size": "0.00000000",
      	"executed_value": "0.0000000000000000",
      	"status": "open",
      	"settled": false
      }, {
      	"id": "48d136e7-7aac-4331-8920-355483a5d739",
      	"price": "0.04923000",
      	"size": "0.01000000",
        "product_id": "ETH-BTC",
      	"side": "buy",
      	"stp": "dc",
      	"type": "limit",
      	"time_in_force": "GTC",
      	"post_only": true,
      	"created_at": "2017-11-20T20:05:15+00:00",
      	"fill_fees": "0.0000000000000000",
      	"filled_size": "0.00000000",
      	"executed_value": "0.0000000000000000",
      	"status": "open",
      	"settled": false
      }
		]


    const openorders_BTC_USD = [
      {
      	"id": "1c4c474a-1226-432e-bb57-be00a349ddd7",
      	"price": "5960.79000000",
      	"size": "1.01000000",
      	"product_id": "BTC-USD",
      	"side": "sell",
      	"stp": "dc",
      	"type": "limit",
      	"time_in_force": "GTC",
      	"post_only": true,
      	"created_at": "2017-10-26T16:15:35.628349Z",
      	"fill_fees": "0.0000000000000000",
      	"filled_size": "0.00000000",
      	"executed_value": "0.0000000000000000",
      	"status": "open",
      	"settled": false
      }, {
      	"id": "00426d45-8425-4af0-ad53-9599453bd038",
      	"price": "5961.80000000",
      	"size": "0.45777785",
        "product_id": "BTC-USD",
      	"side": "sell",
      	"stp": "dc",
      	"type": "limit",
      	"time_in_force": "GTC",
      	"post_only": true,
      	"created_at": "2017-10-26T16:19:28.158102Z",
      	"fill_fees": "0.0000000000000000",
      	"filled_size": "0.00000000",
      	"executed_value": "0.0000000000000000",
      	"status": "open",
      	"settled": false
      }, {
      	"id": "48d136e7-7aac-4331-8920-355483a5d739",
      	"price": "5958.01000000",
      	"size": "0.21457895",
        "product_id": "BTC-USD",
      	"side": "buy",
      	"stp": "dc",
      	"type": "limit",
      	"time_in_force": "GTC",
      	"post_only": true,
      	"created_at": "2017-10-26T16:22:00.52126Z",
      	"fill_fees": "0.0000000000000000",
      	"filled_size": "0.00000000",
      	"executed_value": "0.0000000000000000",
      	"status": "open",
      	"settled": false
      }
		];

		const filledorders_BTC_USD = [
      {
      	"id": "1c4c474a-1226-432e-bb57-be00a349ddd7",
      	"price": "5960.79000000",
      	"size": "1.01000000",
      	"product_id": "BTC-USD",
      	"side": "sell",
      	"stp": "dc",
      	"type": "limit",
      	"time_in_force": "GTC",
      	"post_only": true,
      	"created_at": "2017-10-26T16:15:35.628349Z",
      	"fill_fees": "0.0000000000000000",
      	"filled_size": "0.00000000",
      	"executed_value": "0.0000000000000000",
      	"status": "open",
      	"settled": false
      }, {
      	"id": "00426d45-8425-4af0-ad53-9599453bd038",
      	"price": "5961.80000000",
      	"size": "0.45777785",
        "product_id": "BTC-USD",
      	"side": "sell",
      	"stp": "dc",
      	"type": "limit",
      	"time_in_force": "GTC",
      	"post_only": true,
      	"created_at": "2017-10-26T16:19:28.158102Z",
      	"fill_fees": "0.0000000000000000",
      	"filled_size": "0.00000000",
      	"executed_value": "0.0000000000000000",
      	"status": "open",
      	"settled": false
      }, {
      	"id": "48d136e7-7aac-4331-8920-355483a5d739",
      	"price": "5958.01000000",
      	"size": "0.21457895",
        "product_id": "BTC-USD",
      	"side": "buy",
      	"stp": "dc",
      	"type": "limit",
      	"time_in_force": "GTC",
      	"post_only": true,
      	"created_at": "2017-10-26T16:22:00.52126Z",
      	"fill_fees": "0.0000000000000000",
      	"filled_size": "0.00000000",
      	"executed_value": "0.0000000000000000",
      	"status": "open",
      	"settled": false
      }
		];

		const currency = [
			{
				symbol: 'USD',
				name: 'US Dollars',
				last: null,
				volume: null,
				change: null
			},
			{
				symbol: 'BTC',
				name: 'Bitcoin',
				last: 986.456,
				volume: 978.456,
				change: -0.4338
			},
			{
				symbol: 'DGB',
				name: 'DigiByte',
				last: 1439.726,
				volume: 1182.167,
				change: 1.1200
			},
			{
				symbol: 'OMG',
				name: 'OmiseGO',
				last: 1182.167,
				volume: 1070.861,
				change: -0.0744
			},
			{
				symbol: 'LTC',
				name: 'Litecoin',
				last: 1070.861,
				volume: 1038.665,
				change: -0.0070
			},
			{
				symbol: 'ADA',
				name: 'Cardano',
				last: 1038.665,
				volume: 998.691,
				change: 0.0710
			},
			{
				symbol: 'XLM',
				name: 'Lumen',
				last: 998.691,
				volume: 998.591,
				change: -0.0430
			},
			{
				symbol: 'XRP',
				name: 'Ripple',
				last: 998.591,
				volume: 997.691,
				change: -0.4338
			},
			{
				symbol: 'ETH',
				name: 'Etherium',
				last: 997.691,
				volume: 986.456,
				change: -0.0430
			},
			{
				symbol: 'MONA',
				name: 'Monacoin',
				last: 986.456,
				volume: 978.456,
				change: -0.4338
			},
			{
				symbol: 'NEO',
				name: 'Neo',
				last: 978.456,
				volume: 931.154,
				change: 1.1200
			},
			{
				symbol: 'QTUM',
				name: 'Quantum',
				last: 931.154,
				volume: 931.691,
				change: -0.0744
			},
			{
				symbol: 'DGB',
				name: 'DigiByte',
				last: 16498.691,
				volume: 930.591,
				change: -0.0070
			},
			{
				symbol: 'OMG',
				name: 'OmiseGO',
				last: 9128.084,
				volume: 920.691,
				change: 0.0710
			},
			{
				symbol: 'LTC',
				name: 'Litecoin',
				last: 4369.267,
				volume: 920.456,
				change: -0.0430
			},
			{
				symbol: 'ADA',
				name: 'Cardano',
				last: 2283.857,
				volume: 919.456,
				change: -0.4338
			},
			{
				symbol: 'XRP',
				name: 'Ripple',
				last: 1833.960,
				volume: 919.154,
				change: -0.0430
			},
			{
				symbol: 'ETH',
				name: 'Etherium',
				last: 1493.858,
				volume: 918.691,
				change: -0.4338
			},
			{
				symbol: 'MONA',
				name: 'Monacoin',
				last: 978.456,
				volume: 931.691,
				change: 1.1200
			},
			{
				symbol: 'NEO',
				name: 'Neo',
				last: 931.154,
				volume: 930.591,
				change: -0.0744
			},
			{
				symbol: 'QTUM',
				name: 'Quantum',
				last: 16498.691,
				volume: 920.691,
				change: -0.0070
			},
			{
				symbol: 'DGB',
				name: 'DigiByte',
				last: 9128.084,
				volume: 920.456,
				change: 0.0710
			},
			{
				symbol: 'OMG',
				name: 'OmiseGO',
				last: 4369.267,
				volume: 919.456,
				change: -0.0430
			},
			{
				symbol: 'LTC',
				name: 'Litecoin',
				last: 2283.857,
				volume: 919.154,
				change: -0.4338
			},
			{
				symbol: 'ADA',
				name: 'Cardano',
				last: 1833.960,
				volume: 918.691,
				change: -0.0430
			},
			{
				symbol: 'XRP',
				name: 'Ripple',
				last: 1493.858,
				volume: 931.154,
				change: -0.4338
			},
			{
				symbol: 'ETH',
				name: 'Etherium',
				last: 978.456,
				volume: 931.691,
				change: 1.1200
			}
		];

		return {
      tradehistory_ETH_BTC,
      tradehistory_BTC_USD,
      orderbook_BTC_USD,
      orderbook_ETH_BTC,
      dxOrderbook,
      dxTradeHistory,
      priceChart,
      stats_ETH,
      stats_BTC,
      openorders_ETH_BTC,
      openorders_BTC_USD,
      filledorders_ETH_BTC,
      filledorders_BTC_USD,
			currency
    };
	}
}
