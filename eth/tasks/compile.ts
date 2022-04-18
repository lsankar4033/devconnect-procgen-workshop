import {
  HardhatArguments,
  HardhatRuntimeEnvironment,
  RunSuperFunction,
  TaskArguments,
} from 'hardhat/types';
import { task } from 'hardhat/config';
import * as fs from 'fs/promises';
import * as path from 'path';
import * as prettier from 'prettier';

task('compile', 'hook the compile step and copy our abis after').setAction(copyAbi);

async function copyAbi(
  args: HardhatArguments,
  hre: HardhatRuntimeEnvironment,
  runSuper: RunSuperFunction<TaskArguments>
) {
  await runSuper(args);

  // save the contract ABIs to client
  const coreAbi = prettier.format(
    JSON.stringify((await hre.artifacts.readArtifact('TinyWorld')).abi),
    { semi: false, parser: 'json' }
  );
  const abisDir = path.join(hre.packageDirs['common-contracts'], 'abis');

  await fs.mkdir(abisDir, { recursive: true });

  // Save contract ABIs to client
  await fs.writeFile(path.join(abisDir, 'TinyWorld.json'), coreAbi);
}

// todo upstream export of task name
task('size-contracts', 'post contract sizer hook to ensure hardhat compile').setAction(
  contractSizer
);

async function contractSizer(
  args: HardhatArguments,
  hre: HardhatRuntimeEnvironment,
  runSuper: RunSuperFunction<TaskArguments>
) {
  // force a compile to make sure size data is fresh
  await hre.run('compile');
  await runSuper(args);
}
