const parse = require('pg-connection-string').parse;
const config = parse('postgres://uc66rs321dnv93:p0e41dfc7a2faacabfe2cc35acf930a9e429e50e9ab753f6dc33e4f8cca7c573e@cf980tnnkgv1bp.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/dcpnl4ua4lp7c');
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
