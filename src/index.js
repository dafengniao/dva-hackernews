import './index.html';
import './index.less';
import dva, { connect } from 'dva';

// 1. Initialize
const app = dva();

// 2. Model
app.model(require('./models/app'));
app.model(require('./models/item'));
app.model(require('./models/user'));

// 3. Router
app.router(require('./router'));

// 4. Start
app.start('#root');
