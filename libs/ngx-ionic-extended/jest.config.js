module.exports = {
  name: 'ngx-ionic-extended',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ngx-ionic-extended',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
