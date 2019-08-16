import BlockNumber from '../../../src/types/BlockNumber';

/**
 * BlockNumber test
 */
describe('BlockNumberTest', () => {
    it('calls the constructor with predefined block number "latest"', () => {
        expect(new BlockNumber('latest').toString()).toEqual('latest');
    });

    it('calls the constructor with predefined block number "pending"', () => {
        expect(new BlockNumber('pending').toString()).toEqual('pending');
    });

    it('calls the constructor with predefined block number "earliest"', () => {
        expect(new BlockNumber('earliest').toString()).toEqual('earliest');
    });

    it('calls the constructor with a number', () => {
        expect(new BlockNumber(1234).toString()).toEqual('0x04d2');
    });

    it('calls the constructor with a hex string', () => {
        expect(new BlockNumber('0x0A').toString()).toEqual('0x0A');
    });

    it('calls the constructor with a hex', () => {
        expect(new BlockNumber(0x0a).toString()).toEqual('0x0a');
    });
});
