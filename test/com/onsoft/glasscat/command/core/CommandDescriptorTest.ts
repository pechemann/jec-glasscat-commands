//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import { TestSuite, Test, BeforeAll } from "jec-juta";
import { expect } from "chai";
import { CommandDescriptor } from "../../../../../../src/com/onsoft/glasscat/command/core/CommandDescriptor";

@TestSuite({
  description: "Test the CommandDescriptor class properties."
})
export class CommandDescriptorTest {

  public descriptor:CommandDescriptor = null;

  @BeforeAll()
  public initTest():void {
    this.descriptor = new CommandDescriptor();
  }

  @Test({
    description: "should have a 'name' property set to 'null'"
  })
  public nameTest():void {
    expect(this.descriptor).to.have.property("name", null);
  }
  
  @Test({
    description: "should have a 'description' property set to 'null'"
  })
  public descriptionTest():void {
    expect(this.descriptor).to.have.property("description", null);
  }
  
  @Test({
    description: "should have a 'parameters' property set to 'null'"
  })
  public parametersTest():void {
    expect(this.descriptor).to.have.property("parameters", null);
  }
}