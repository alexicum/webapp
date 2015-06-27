import bunyan from 'bunyan'

import stream from 'stream'
const console_output = new stream()
console_output.writable = true

console_output.write = data =>
{
	switch (data.level)
	{
		case 60:
			console.log('FATAL', data.msg)
			break

		case 50:
			console.log('ERROR', data.msg)
			break

		case 40:
			console.log('WARNING', data.msg)
			break

		case 30:
			console.log('>', data.msg)
			break

		case 20:
			console.log('//', data.msg)
			break

		case 10:
			console.log('//', data.msg)
			break

		default:
			console.log('LOG', data.msg)
			break
	}
}

const development_log = 
{
	streams: 
	[{
		type: 'raw',
		stream: console_output
	}],
	serializers: 
	{
		error    : bunyan.stdSerializers.err,
		request  : bunyan.stdSerializers.req,
		response : bunyan.stdSerializers.res,
	}
}

const production_log = {}

const log_configuration = process.env.NODE_ENV === 'production' ? production_log : development_log

export default bunyan.createLogger(Object.extend({ name: 'cinema' }, log_configuration))